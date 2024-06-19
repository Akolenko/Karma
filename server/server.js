require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

//GET
const bidsRouter = require('./routes/views/bids.router')
//API
const bidApiRouter = require('./routes/API/bid.api.route');

const app = express();
const PORT = process.env.PORT | 3000;

serverConfig(app);

//GET
app.use('/', bidsRouter)
//API
app.use('/api', bidApiRouter)

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})