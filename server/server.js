require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

//GET
const bidsRouter = require('./routes/views/bids.router')
const profileRouter = require("./routes/views/profile.bio.router")
const profileBidsRouter = require("./routes/views/profile.bid.router")
//API
const bidApiRouter = require('./routes/API/bid.api.route');

const app = express();
const PORT = process.env.PORT | 3000;

serverConfig(app);

//GET
app.use('/', bidsRouter)
app.use('/profile', profileRouter)
app.use("/profile/bids", profileBidsRouter)
//API
app.use('/api',bidApiRouter)

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})