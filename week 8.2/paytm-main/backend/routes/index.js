import express from express
const app = express();
const PORT = 3000;

const router = express.router();

const apiRouter = router.get('/api/v1', (req, res)=>{
    res.send("Hello");
})

app.listen(PORT, (err)=>{
    if(err) console.log("error");
    console.log("Server listening on PORT", PORT)
})

module.exports = apiRouter;

