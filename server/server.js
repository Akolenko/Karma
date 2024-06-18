require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

const bidApiRouter = require('./routes/API/bid.api.route');

const app = express();
const PORT = process.env.PORT | 3000;

serverConfig(app);


app.use('/api', bidApiRouter)

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})