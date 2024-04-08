import express from express;
import { User } from '../db';
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const z = require("zod");

const router = express.Router();

const signUpSchema = z.object({
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
	password: z.string()
})

router.post('/signup', async (req, res)=>{
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    const { success } = signUpSchema.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: username
    });

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.create({
        username,
        password,
        firstName,
        lastName
    })

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    return res.status(200).json({
        message: "User created successfully",
	    token: token
    })

})  


module.exports = router;