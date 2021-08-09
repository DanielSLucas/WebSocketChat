import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/ChatRoom";

@injectable()
class CreateChatRoomService{
  async execute(usersIds: string[]) {
    const room = await ChatRoom.create({
      idUsers: usersIds,
    });

    return room;
  }
}

export { CreateChatRoomService }