import { io, serverHttp } from "./http";
import { socket } from "./websocket";

const _port = 3001

serverHttp.listen(_port, () => {
  console.log(`running on port ${_port}! 🚀`)
  socket({ io })
})