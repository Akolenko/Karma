const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const FileStore = require('session-file-store')(session);
const morgan = require('morgan');

const sessionConfig = {
  store: new FileStore(),    // настройка файлового хранилища
  name: 'user_sid',        // имя куки для хранения id сессии
  secret: process.env.SESSION_SECRET ?? 'wath',	 // для шифрования id сессии
  resave: false, 			   // не пересохранять куку при каждом запросе
  saveUninitialized: false,  // не создавать сессию без записи в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // срок действия куки в миллисекундах
    httpOnly: true,
  },
}

const serverConfig = (app) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(session(sessionConfig));
}

module.exports = serverConfig;
