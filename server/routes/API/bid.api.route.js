const express = require('express');
const router = express.Router();
const {Bid} = require('../../db/models/index');
const UUID = require("uuid-int");
let id = 0
const generator = UUID(id);

const uuid = generator.uuid()

router.post('/bids', async (req, res) => {
  const {title, description, address} = req.body;
  try {
    const newBid = await Bid.create({
      title,
      description,
      address,
      status: 'create',
      author_id: 2//TODO Хард-код, изменить при рабочей авторизации
    });
    if (newBid) {
      res.status(201).json({title, description, address});
    } else {
      res.status(403).json({message: 'didnt create new Bid'})
    }
  } catch (e) {
    res.status(400).json({message: "Didn't created bid!"});
  }

})

module.exports = router;