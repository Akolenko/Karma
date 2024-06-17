const express = require('express');
const router = express.Router();


router.post('/bids', async (req, res) => {
  const {title, description, address} = req.body;
  console.log({title, description, address});
  try {
    res.status(201).json({title, description, address});
  } catch (e) {
    res.status(400).json({message: "Didn't created bid!"});
  }

})

module.exports = router;