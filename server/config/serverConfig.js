const express = require('express');
const FileStore = require('session-file-store')(session);
const morgan = require('morgan');
const cors = require('cors');


const serverConfig = (app) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use(cors({
    credentials: 'true'
  }))
}

module.exports = serverConfig;
