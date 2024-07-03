const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const errorMiddleware = require('../middleware/error-middleware');
const cookieParser = require('cookie-parser');

const corsOptions = {
  origin: ['http://localhost:5173, http://46.148.228.8:5173, http://46.148.228.8:80'],
  optionsSuccessStatus: 200,
  credentials: true,
};


const serverConfig = (app) => {

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors(corsOptions))
  app.use(cookieParser());
  app.use(errorMiddleware)

}

module.exports = serverConfig;