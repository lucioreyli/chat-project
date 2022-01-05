import { Server, Socket } from "socket.io";

interface SocketProps {
  io: Server,
}

export function socket({ io }: SocketProps) {
  console.log('socket are enabled')

  io.on('connect', (socket: Socket) => {
    console.log(`User ${socket.id} is connected`)

    socket.on('disconnect', () => {
      console.log(`User ${socket.id} is disconnected`)
    })

    socket.on('message', (message: string) => { io.emit('broadcastMessages', { message, id: socket.id, dateTime: new Date() }) });

  })



}