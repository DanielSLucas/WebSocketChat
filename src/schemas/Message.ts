import mongoose, { Document, Schema } from 'mongoose';

type Message = Document & {
  from: string;
  text: string;
  created_at: Date;
  rommId: string;
}

const MessageSchema = new Schema({
  from: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  text: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
  roomId: {
    type: String,
    ref: "ChatRoom"
  },
});

const Message = mongoose.model<Message>("Messages", MessageSchema);

export { Message };