const express = require("express");
const User = require('../db.js');
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const z = require("zod");
const { authMiddleware } = require("../middleware.js")

const router = express.Router();

const signUpSchema = z.object({
    username: z.string().email(),
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
// sorry
    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    return res.status(200).json({
        message: "User created successfully",
	    token: token
    })

})  

const signinSchema = z.object({
    username: z.string().email(),
    password: z.string()
})

router.post('/signin', async (req, res) => {
    const { success } = signinSchema.safeParse(req.body);

    if (!success){
        return res.status(411).json({
            message: "Error while logging in"
        })
    }

    const username = req.body.username;
    const password = req.body.password;
    
    const existingUser = await User.findOne({
        username,
        password
    });

    if(!existingUser) {
        return res.status(411).json({
            message: "Error while logging in"
        })
    }

    const userId = existingUser._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.status(200).json({
        token: token
    })
})

const updateBodySchema = z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
})

router.put('/', authMiddleware, async (req, res)=>{
    const { success } = updateBodySchema.safeParse(req.body);

    if (!success) {
        return res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({_id: req.userId}, req.body);

    res.status(200).json({
        message: "Updated successfully"
    })
})


// bulk route for users to find the users
router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})
module.exports = router;