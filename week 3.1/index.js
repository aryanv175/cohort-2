const express = require("express");
const app = express();
const port = 3000;

app.get('/health-checkup', (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const pass = req.headers.pass;

    if (username !== "admin" || pass !== "pass"){
        res.status(403).json({
            msg: "user does not exist or wrong credentials."
        })
    }

    if (kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg: "invalid kidney credentials."
        })
    }

    res.json("hey there");
})

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})