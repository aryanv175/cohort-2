// auth basics
/*
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json())

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // go over the array to see if that user exists
  for (let i =0; i<ALL_USERS.length; i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
        return true
    }
  }

  return false
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
        users: ALL_USERS
    })

});

app.listen(3000)

*/

/*
// start using databases

const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose.connect(
  "mongodb+srv://aryanverma:S8J0LAsOZ9hPsXZ0@cluster0.eitqolz.mongodb.net/usersnew",
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.sendStatus(411).json({ message: "User already exists" });
  }

  const user = new User({
    name: username,
    email: email,
    password: password,
  });

  user.save().then(() => console.log("User saved!"));
  res.json({
    message: "User created successfully",
  });
});

app.listen(3000, () => console.log("Server started on port 3000"));
*/

/*
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
app.use(express.json())

mongoose.connect(
  "mongodb+srv://aryanverma:S8J0LAsOZ9hPsXZ0@cluster0.eitqolz.mongodb.net/usersnew",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
  // should check in the database
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
*/


const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const jwt = require('jsonwebtoken');
// used to verify and generate the jwt token
const jwtPassword = "123";  

//connect to the database:
mongoose.connect("mongodb+srv://aryanverma:S8J0LAsOZ9hPsXZ0@cluster0.eitqolz.mongodb.net/temp")

// now we make the schema for the mongodb table
const User = mongoose.model("User", {
    username: String,
    email: String,
    password: String
});

// middleware to parse the body to JSON
app.use(express.json());

// function for existing user
async function existingUser (email){
    let bool = await User.findOne({ email : email});
    return bool
}

// making the signup route
app.post('signup', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
 
    if (existingUser(email)) {
        return res.sendStatus(411).json({
            message: "User already exists try signing in!"
        })
    }

    // else
    const user = new User ({
        username: username,
        email: email,
        password: password
    })

    user.save().then(()=>console.log("User is saved!"))

    res.json({
        message: "user saved successfully!"
    })

});



app.post('/signin', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if (!existingUser(email)){
        return res.sendStatus(411).json({
            message: "you are not a user"
        })
    }

    // generate a token for the user
    var token = jwt.sign({email: email}, jwtPassword)

    // send the token to the user
    return res.sendStatus(200).json({
        token,
        message: "Please use this token to sign in the next time."
    })
})

app.listen(3000, ()=>console.log("running on port 3000"))