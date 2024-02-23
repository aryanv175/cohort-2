const express = require("express");
const { createTodo, updateTodo } = require("./types")
const app = express();
const port = 3000;

app.use(express.json())

app.post('/todo', (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            Message: "you sent the wrong inputs."
        })
        return;
    }
})

app.get('/todos', (req, res)=>{
    console.log("hey there")
})

app.put('/completed', (req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success){
        res.status(411).json({
            Message: "you sent the wrong inputs."
        })
        return;
    }
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})