import mongoose, { Document, Schema } from 'mongoose';
import { User } from './User';
import { v4 as uuidV4 } from "uuid";

type ChatRoom = Document & {
  idUsers: User[];
  idChatRoom: string
}

const ChatRoomSchema = new Schema({
  idUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users"
    }
  ],
  idChatRoom: {
    type: String,
    default: uuidV4,
  },
});

const ChatRoom = mongoose.model<ChatRoom>("ChatRooms", ChatRoomSchema);

export { ChatRoom };