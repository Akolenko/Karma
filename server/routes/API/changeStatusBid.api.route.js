const express = require('express');
const router = express.Router();
const {Bid} = require('../../db/models');

router.put("/bids/:id", async (req, res) => {
  const bidId = req.params.id;

  const bid = await Bid.findByPk(bidId);
  const currentBid = await Bid.findOne({where: {id: bid.id}});
  const changeStatusBid = await currentBid.update({status: 'response'})
  if (changeStatusBid.status === 'response') {
    res.status(200).json({text: 'successful!'})
  } else {
    res.status(403).json({message: 'didnt update bid!'});
  }
})

module.exports = router;