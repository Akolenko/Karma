require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require('socket.io');

const app = express();
const port = process.env.PORT || 4000;

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});

io.listen(4001, () => {
  console.log('Listening on port ');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
})

io.on('connection', (socket) => {
  console.log('connect');
})