const express = require('express');
const router = express.Router();
const {Bid} = require('../../db/models')

router.get('/bids', async (req, res) => {
  const bids = await Bid.findAll();
  res.status(200).json(bids);
})

module.exports = router;
