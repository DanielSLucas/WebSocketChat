import { injectable } from "tsyringe";
import { Message } from "../schemas/Message";

interface CreateMessageDTO {
  from: string;
  text: string;
  roomId: string;
}

@injectable()
class CreateMessageService {
  async execute({ from, roomId, text }:CreateMessageDTO) {
    const message = await Message.create({
      from,
      text,
      roomId,
    });

    return message;
  }
}

export { CreateMessageService };