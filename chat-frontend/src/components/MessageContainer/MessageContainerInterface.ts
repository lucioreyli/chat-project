import { User } from "../ContactItem/ContactItemInterface";

export interface Message {
  id_user: string,
  content: string,
  dateTime: Date,
}

export interface MessageContainerProps {
  message: Message,
}