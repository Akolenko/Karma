require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

//GET
const bidsRouter = require('./routes/views/bids.router')
const profileRouter = require("./routes/views/profile.bio.router")
const profileBidsRouter = require("./routes/views/profile.bid.router")
//API
const bidApiRouter = require('./routes/API/bid.api.route');
const responseApiRouter = require('./routes/API/response.api.route')
const changeStatusBIdRouter = require('./routes/API/changeStatusBid.api.route')
const app = express();
const PORT = process.env.PORT | 3000;

serverConfig(app);

//GET
app.use('/api', bidsRouter)
app.use('/api/profile', profileRouter)
app.use("/api/profile/bids", profileBidsRouter)
//API
app.use('/api',bidApiRouter, responseApiRouter, changeStatusBIdRouter)


app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})