import { MessageContainerProps } from "./MessageContainerInterface";
import {
  Container,
  Content,
  Icon,
  Message,
  Username
} from "./styles";

const defaultImage = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png';



export const MessageContainer = ({ message }: MessageContainerProps) => {
  return <Container >
    <Icon src={defaultImage} />
    <Content>
      <Username>@{message.id_user}</Username>
      <Message>{message.content}</Message>
      <span>{`${message.dateTime}`}</span>
    </Content>
  </Container>
}