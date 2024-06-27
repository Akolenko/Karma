const express = require('express');
const router = express.Router();
const {Response, Room} = require('../../db/models')

router.post('/responses', async (req, res) => {
  const {user_id, bid_id, author_id} = req.body;
  try {
    const newResponse = await Response.create({user_id, bid_id});
    const newRoom = await Room.create({user_id, bid_id, room_id: newResponse.id})
    const newUserRoom = await Room.create({user_id: author_id, bid_id, room_id: newResponse.id})
    if (newResponse) {
      res.status(201).json({text: 'Запись в Response успешно создана'})
    } else {
      res.status(403).json({text: 'Нет данных'})
    }
  } catch (e) {
    console.log(e)
    res.status(400).json({message: "Didn't created Response!"});
  }
})
  .delete('/responses/', async (req, res) => {
    const {user_id, bid_id} = req.body;

    try {
      await Room.destroy({where: {bid_id}})
      await Response.destroy({where: {user_id: Number(user_id), bid_id}})
      res.status(201).json({message: 'deleted response'})
    } catch (e) {
      console.log(e)
    }
  })

module.exports = router;