const express = require('express');
const router = express.Router();
const {Bid} = require('../../db/models');

router.post('/bids', async (req, res) => {
  const {title, description, address} = req.body;
  try {
    console.log(req.body)
    const newBid = await Bid.create({
      title,
      description,
      address,
      status: 'create',
      author_id: 2//TODO Хард-код, изменить при рабочей авторизации
    });
    console.log('newBid', newBid);
    if (newBid) {
      res.status(201).json({title, description, address});
    } else {
      res.status(403).json({message: 'didnt create new Bid'})
    }
  } catch (e) {
    console.log(e)
    res.status(400).json({message: "Didn't created bid!"});
  }

})

module.exports = router;