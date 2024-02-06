const express = require("express");
const app = express();
const port = 3000;

app.get('/health-checkup', (req, res) => {
    const kidenyId = req.query.kidenyId;
    const username = req.headers.username;
    const pass = req.headers.pass;

    if (username !== "admin" || pass !== "123"){
        res.status(403).json({
            msg: "user does not exist or wrong credentials."
        })
    }

    if (kidenyId !== 1 || kidenyId !== 2){
        res.status(403).json({
            msg: "invalid kidney credentials."
        })
    }

    res.json("hey there");
})

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})