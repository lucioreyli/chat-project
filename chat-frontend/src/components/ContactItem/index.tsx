import { ContactItemProps } from "./ContactItemInterface";
import { Container, Icon, Username } from "./styles";

const defaultImage = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png';

/*
    User
    |-username
*/

export const ContactItem = ({ user }: ContactItemProps) => {

  return <Container>
    <Icon src={user.photoURL ? user.photoURL : defaultImage} />
    <Username>@{user.username}</Username>
  </Container>
}

