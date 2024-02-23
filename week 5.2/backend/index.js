const  express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.post('/todo', (req, res)=>{
    console.log("hey there")
})


app.get('/todos', (req, res)=>{
    console.log("hey there")
})

app.put('/completed', (req, res)=>{
    console.log("hey there")
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})