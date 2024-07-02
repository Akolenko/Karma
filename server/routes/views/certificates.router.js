const express = require("express");
const certificatesRouter = express.Router();
const { Certificate, User } = require("../../db/models");
const mailService = require("../../service/mail-service");

certificatesRouter.get("/", async (req, res) => {
  const certificatesFromDB = await Certificate.findAll();
  const certificates = JSON.parse(JSON.stringify(certificatesFromDB));
  res.status(200).json(certificates);
});

certificatesRouter.post("/buy", async (req, res) => {
  try {
    const { userId, sum, image } = req.body;
    console.log(image);
    const DBuser = await User.findByPk(Number(userId));

    if (DBuser.scores < Number(sum / 100)) {
      res.json({ message: "Не хватает баллов для покупки." });
    } else {
      DBuser.scores = Math.floor(DBuser.scores - sum / 100)
      DBuser.save()
      await mailService.sendCertificationBuyingMail(DBuser.email, image, DBuser.fio)
      res.json({ message: "Покупка успешно совершена." })
      
    }
  } catch (error) {
    console.log("Что за хрень?! Срочно звоните Алмамбету!");
    res.json({
      message:
        "Что-то пошло не так... Надо было Полину слушаться и лучше учиться!",
    });
  }
});

module.exports = certificatesRouter;
