import { IoSend } from "react-icons/io5"
import styled from "styled-components"
import { colors } from "~/styles/colors"

export const InputMessage = styled.input`
  padding: 10px 15px;
  border-radius: 7px;
  width: 100%;
`

export const ContainerInputMessage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 80%;
  padding-block: 10px;
`

export const ButtonSendMessageContainer = styled.button`
  display: flex;

  text-align: center;

  background-color: ${colors.primary};
  color: ${colors.heading};
  border-radius: 7px;
  padding: 15px;
`

export const ButtonSendMessage = ({ ...rest }) => {
  return <ButtonSendMessageContainer {...rest}>
    <IoSend />
  </ButtonSendMessageContainer>
}
