require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');
const router = require('./router/index')


//GET
const bidsRouter = require('./routes/views/bids.router')
const profileRouter = require("./routes/views/profile.bio.router")
const profileActiveBidsRouter = require("./routes/views/profile.active.bid.router")
const likeRouter = require('./routes/views/likes.router')
const responsesRouter = require('./routes/views/myResponses.router')
const profileProgressBidsRouter = require('./routes/views/profile.progress.bid.router')
//API
const bidApiRouter = require('./routes/API/bid.api.route');
const responseApiRouter = require('./routes/API/response.api.route')
const changeStatusBIdRouter = require('./routes/API/changeStatusBid.api.route')
const likeApiRouter = require('./routes/API/like.api.route')
const profileActiveBidsApiRouter = require('./routes/API/activeBid.api.route')

const app = express();
const PORT = process.env.PORT || 3000;

serverConfig(app);
app.use('/api', router)
//GET
app.use('/api', bidsRouter, likeRouter, responsesRouter)
app.use('/api/profile', profileRouter)
app.use("/api/profile/bids/active", profileActiveBidsRouter)
app.use('/api/profile/bids/progress' , profileProgressBidsRouter)
//API
app.use('/api',
  bidApiRouter,
  responseApiRouter,
  changeStatusBIdRouter,
  likeApiRouter,
  profileActiveBidsApiRouter
  )

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})