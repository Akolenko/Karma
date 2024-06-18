const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

const serverConfig = (app) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use(cors(corsOptions))
}

module.exports = serverConfig;
