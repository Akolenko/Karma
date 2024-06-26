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

module.exports = router;
