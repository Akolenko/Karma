const express = require('express');
const router = express.Router();
const {Bid} = require('../../db/models')

module.exports = router.delete('/profile/bids', async (req, res) => {
  const {user_id, bid_id} = req.body
  try{
    const  currentBid = await Bid.findByPk(bid_id);
    if(currentBid.author_id === +user_id){
      await Bid.destroy({where:{id:currentBid.id}});
      res.status(200).end();
    } else {
      res.status(403).json({message: 'Not authorized'});
    }
  }
  catch(e){
    console.log(e)
  }
})