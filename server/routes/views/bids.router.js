const express = require('express');
const router = express.Router();
const {Bid} = require('../../db/models')
const {Op} = require("sequelize");

router.get('/bids', async (req, res) => {
  const {userId} = req.query;
 
  const bids = await Bid.findAll({
    where: {
      status: 'create', author_id: {
        [Op.ne]: userId
      }
    }, raw: true
  });
  res.status(200).json(bids);
})

router.get('/all-bids', async (req, res) => {

 
  const bidsFromDB = await Bid.findAll();
  const allBids = JSON.parse(JSON.stringify(bidsFromDB))
  res.status(200).json(allBids);
})

router.get('/bid/:id', async (req, res) => {
  const { id } = req.params
 
  const bidFromDB = await Bid.findByPk(Number(id));
  const bid = bidFromDB.get()
  res.status(200).json(bid);
})

module.exports = router;
