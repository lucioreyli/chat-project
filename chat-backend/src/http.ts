import cors from "cors";
import express, { urlencoded } from "express";
import http from 'http'
import { Server } from 'socket.io'

const app = express()
app.use(cors())

const serverHttp = http.createServer(app)

const io = new Server(serverHttp
  , {
    cors: {
      origin: 'http://192.168.0.56:3000',
      credentials: true,
    }
  }
)

export {
  serverHttp,
  io
}