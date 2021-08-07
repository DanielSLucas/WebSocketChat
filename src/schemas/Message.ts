import mongoose, { Document, Schema } from 'mongoose';

type Message = Document & {
  to: String;
  text: String;
  created_at: Date;
  rommId: String;
}

const MessageSchema = new Schema({
  to: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  text: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
  rommId: {
    type: String,
    ref: "ChatRoom"
  },
});

const Message = mongoose.model<Message>("Messages", MessageSchema);

export { Message };