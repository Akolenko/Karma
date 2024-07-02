require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require('socket.io');
const morgan = require("morgan");
const {Message, User} = require("./db/models");

const app = express();
const port = process.env.PORT || 4000;

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://46.148.228.8:5173"]
  }
});

app.use(morgan("dev"));

io.on('connection', (socket) => {
  console.log('connect');

  socket.on('join', async ({room, user}) => {

    socket.join(room);
    const messages = await Message.findAll({where: { room_id: room }});
    const getUser = await User.findOne({where: {id: user}})

    socket.emit('messages', {
      data: messages
    })
  })

  socket.on('sendMessage', async ({request}) => {

    const messageCreate = await Message.create({
      room_id: request.room_id,
      user_id: request.user_id,
      text_message: request.text_message,
      is_read: request.is_read,
    })

    io.to(request.room_id).emit('message', {data: {messageCreate}})
  })

  io.on('disconnect', () => {
    console.log('Disconnect');
  })
})

server.listen(port, () => {
  console.log('Listening on port ' + port);
});