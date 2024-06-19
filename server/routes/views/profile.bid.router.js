const express = require('express')
const router = express.Router()
const { Bid } = require('../../db/models');

router.get("/", async (req,res)=>{
    const userID = 1
  
    try {
        const bidsDB = await Bid.findAll({where:{author_id: userID}});
        console.log(bidsDB);

        if(bidsDB){
            const bids = JSON.parse(JSON.stringify(bidsDB));
            res.json(bids)
        }else{
            res.status(500).json({ message: 'err_finding_bids'})
        }
        
    } catch (error) {
        console.log('ERR_FINDING_RESTAURANT', error);
        res.status(500).json({ message: 'err_finding_bids'})
    }
})

module.exports = router;