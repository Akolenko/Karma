const express = require('express');
const router = express.Router();
const {Response} = require('../../db/models')


router.post('/responses', async (req, res) => {
  const {user_id, bid_id} = req.body;

  try{
    const newResponse = await Response.create({user_id, bid_id});
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

module.exports = router;