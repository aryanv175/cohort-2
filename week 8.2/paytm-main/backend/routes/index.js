const express = require("express");
const userRouter = require("./user.js");
const accountROuter = require("./account.js")
const router = express.Router();

router.use('/user', userRouter);
router.use('/account', accountROuter);

module.exports = router;

