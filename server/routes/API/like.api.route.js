const express = require('express');
const router = express.Router();
const {Like} = require('../../db/models/')

router.post('/bids/:id/like', async( req, res) =>{
  const { user_id, bid_id } = req.body;

  try {
    const prevLike = await Like.findOne({where: {user_id: Number(user_id), bids_id: bid_id}})

    if(prevLike){
      res.status(403).json({message:'пользователь уже ставил лайк этой заявке'})
    } else {
      const newLike = await Like.create({user_id, bids_id: bid_id})
      if(newLike){
        res.status(201).json(newLike)
      }
    }
  } catch (e) {
    console.log(e)
    res.status(400).json({message: "Didn't created like!"});
  }
})

module.exports = router