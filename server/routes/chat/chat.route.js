const express = require('express');
const router = express.Router();
const {Message, Response, Bid} = require('../../db/models');
const {where} = require("sequelize");

router.get('/chat', async (req, res) => {
  const { userId } = req.query;
  try {
    const rooms = await Response.findAll({
      include: {
        model: Bid,
        where: { '$user_id$': userId },
        required: false
      },
    });
    // console.log(rooms)
    // const bid = await Bid.findOne(where())
    res.status(200).json(rooms)
  } catch (error) {
    console.log('Ошибка при закгрузке комнат', error);
  }
})

router.get('/chat:room_id', async (req, res) => {
  const {userId} = req.query;
  try {
    const messages = await Message.findAll({where: { room_id: 1}});
    //Поменять room_id: 1 на выбранную комнату
    res.status(200).json(messages);
  } catch (error) {
    console.log('Ошибка запроса', error);
  }
})

module.exports = router