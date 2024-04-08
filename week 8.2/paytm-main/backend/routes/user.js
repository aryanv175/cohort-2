import express from express;
import { User } from '../db';
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const router = express.Router();

router.post('/signup', async (req, res)=>{
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    const existingUser = await User.findOne({
        username: username
    });

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = new User({
        username,
        password,
        firstName,
        lastName
    })

    user.save();

    return res.status(200).json({
        message: "User created successfully",
	    token: "jwt"
    })

})  


module.exports = router;