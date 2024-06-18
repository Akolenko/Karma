require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router/index')


const app = express();
const PORT = process.env.PORT | 3000;

serverConfig(app);

app.use('/api', router)

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})

