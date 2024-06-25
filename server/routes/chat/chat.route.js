const express = require('express');
const router = express.Router();
const {Message} = require('../../db/models');

router.get('/chat', async (req, res) => {
  const {userId} = req.query;
  try {
    const messages = await Message.findAll({where: { room_id: 1}}); //Поменять room_id: 1 на выбранную комнату
    res.status(200).json(messages);
  } catch (error) {
    console.log('Ошибка запроса', error);
  }
})

module.exports = router