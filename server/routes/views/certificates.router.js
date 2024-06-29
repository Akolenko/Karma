const express = require('express');
const certificatesRouter = express.Router();
const { Certificate } = require('../../db/models')


certificatesRouter.get('/', async (req, res) => {
 
  const certificatesFromDB = await Certificate.findAll();
  const certificates = JSON.parse(JSON.stringify(certificatesFromDB))
  res.status(200).json(certificates)
})

module.exports = certificatesRouter
