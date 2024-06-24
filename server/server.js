require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');
const router = require('./router/index');
const socket = require('socket.io');


//GET
const bidsRouter = require('./routes/views/bids.router')
const profileRouter = require("./routes/views/profile.bio.router")
const profileBidsRouter = require("./routes/views/profile.bid.router")
const likeRouter = require('./routes/views/likes.router')
//API
const bidApiRouter = require('./routes/API/bid.api.route');
const responseApiRouter = require('./routes/API/response.api.route')
const changeStatusBIdRouter = require('./routes/API/changeStatusBid.api.route')
const likeApiRouter = require('./routes/API/like.api.route')

const app = express();
const PORT = process.env.PORT || 3000;

serverConfig(app);
app.use('/api', router)
//GET
app.use('/api', bidsRouter, likeRouter)
app.use('/api/profile', profileRouter)
app.use("/api/profile/bid", profileBidsRouter)
//API
app.use('/api',
  bidApiRouter,
  responseApiRouter,
  changeStatusBIdRouter,
  likeApiRouter
  )

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})
