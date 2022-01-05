import { useState, useRef, useEffect, Children, createElement } from "react";
import { MessageContainer } from "~/components/MessageContainer";
import { Message } from "~/components/MessageContainer/MessageContainerInterface";
import { ButtonSendMessage, ContainerInputMessage, InputMessage } from "~/components/MessageInput/styles";
import { socket } from "~/services/socket";
import { Container, MessagesContainer } from "./styles";


export const Conversation = () => {


  const endRef = useRef<HTMLDivElement | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  const [text, setText] = useState('')
  // const [newMessage, setNewMessage] = useState<Message>()
  const [messages, setMessages] = useState<Message[]>([])

  // const showMessage = () => <MessageContainer message={newMessage} key={JSON.stringify(Date.now())} />

  const handleAddMessage = () => {
    if (text) {
      socket.emit('message', text)
      setText('')
    }
  }

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ block: "end", behavior: 'smooth' });
    }
  }, [messages])

  useEffect(() => { socket.on("connect", () => { }) }, [])

  socket.on('broadcastMessages', (content) => {
    setMessages([
      {
        id_user: content.id,
        content: content.message,
        dateTime: content.dateTime
      }
    ])
  })


  return <Container>
    <MessagesContainer ref={messagesRef}>
      {
        // <MessageContainer message={newMessage} key={JSON.stringify(Date.now())} />
        messages.map((message, index) => <MessageContainer message={message} key={message.dateTime.toString()} />)
      }
      <div ref={endRef} />
    </MessagesContainer>
    <ContainerInputMessage>
      <InputMessage
        type='text'
        onKeyPress={evento => {
          if (evento.key === 'Enter')
            handleAddMessage()
        }}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <ButtonSendMessage onClick={handleAddMessage} />
    </ContainerInputMessage>
  </Container>
}