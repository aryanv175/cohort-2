const express = require("express");
const router = express.Router();
const { User, Account } = require("../db")

router.get('/balance', async (req, res)=> {
    const account = await Account.findOne({
        userid: req.userId
    });

    res.json({
        balance: account.balance
    })
})
//hey
module.exports = router;

