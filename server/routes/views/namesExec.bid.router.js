const express = require("express");
const router = express.Router();
const { User, Response } = require("../../db/models");

router.get("/names-exec", async (req, res) => {
  const { bidId } = req.query;
  console.log(bidId);
  try {
    const execId = await Response.findOne({ where: { bid_id: bidId } });
    const currExec = await User.findByPk(execId.user_id);
    console.log(currExec);
    res.status(201).json(currExec.fio);
  } catch (e) {
    res.send(e.message);
    console.log(e.message);
  }
});

module.exports = router;
