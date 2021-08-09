import { ObjectId } from "mongoose";
import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/ChatRoom";

@injectable()
class GetChatRoomByUsersService {
  async execute(usersId: ObjectId[]) {

    const room = await ChatRoom.findOne({
      idUsers: {
        $all: usersId
      },
    }).exec();

    return room;
  }
}

export { GetChatRoomByUsersService };