import { container } from "tsyringe";
import { io } from "../http";
import { CreateChatRoomService } from "../services/CreateChatRoomService";
import { CreateUserService } from "../services/CreateUserService";
import { GetAllUsersService } from "../services/GetAllUsersService";
import { GetUserBySocketIdService } from "../services/GetUserBySocketIdService";

io.on("connect", socket => {
  socket.on("start", async (data) => {
    const { email, avatar, name } = data;
    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      email, 
      avatar, 
      name,
      socket_id: socket.id,
    });

    socket.broadcast.emit("new_users", user);

    console.log(user);
  });

  socket.on("get_users", async (callback) => {
    const getAllUsersService = container.resolve(GetAllUsersService);

    const users = await getAllUsersService.execute();

    callback(users);
  });

  socket.on("start_chat", async (data, callback) => {
    const createChatRoomService = container.resolve(CreateChatRoomService);
    const getUserBySocketIdService = container.resolve(GetUserBySocketIdService);

    const loggedUser = await getUserBySocketIdService.execute(socket.id);

    const room = await createChatRoomService.execute([data.idUser, loggedUser._id]);

    console.log(room);
    callback(room);
  });
});