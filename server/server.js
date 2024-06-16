require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();
const PORT = process.env.PORT | 3000;

serverConfig(app);

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})
