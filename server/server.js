require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');
const router = require('./router/index');


//GET
const bidsRouter = require('./routes/views/bids.router')
const profileRouter = require("./routes/views/profile.bio.router")
const profileBidsRouter = require("./routes/views/profile.bid.router")
const likeRouter = require('./routes/views/likes.router')
const chatRouter = require('./routes/chat/chat.route')
//API
const bidApiRouter = require('./routes/API/bid.api.route');
const responseApiRouter = require('./routes/API/response.api.route')
const changeStatusBIdRouter = require('./routes/API/changeStatusBid.api.route')
const likeApiRouter = require('./routes/API/like.api.route');

const app = express();
const PORT = process.env.PORT || 3000;
const http = require("http").createServer(app)
const io = require("socket.io")(http)


serverConfig(app);
app.use('/api', router)
//GET
app.use('/api', bidsRouter, likeRouter, chatRouter)
app.use('/api/profile', profileRouter)
app.use("/api/profile/bid", profileBidsRouter)
//API
app.use('/api',
  bidApiRouter,
  responseApiRouter,
  changeStatusBIdRouter,
  likeApiRouter
)

io.on('connection', (socket) => {
  console.log('connect');
})

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})
