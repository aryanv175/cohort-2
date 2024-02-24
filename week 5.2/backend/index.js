const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json())
app.use(cors({
    origin: "http:localhost/5173"
}))

app.post('/todo', async (req, res)=>{
    // get the body from the req
    const createPayload = req.body;
    // check if it follows the zod schema
    const parsedPayload = createTodo.safeParse(createPayload);
    // if it does not, we give a 411 and error message
    if (!parsedPayload.success){
        res.status(411).json({
            Message: "you sent the wrong inputs."
        })
        return;
    }

    // if it does follow it then we go ahead and put it in the database.
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.status(200).json({
        message: "Todo created successfully!"
    });
})

app.get('/todos', async (req, res)=>{
    // simply return all the todos. so we have no conditions in the find.
    const allTodos = await Todo.find({});
    res.status(200).json(allTodos);
})

app.put('/completed', async (req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success){
        res.status(411).json({
            Message: "you sent the wrong inputs."
        })
        return;
    }

    // if they have passed the zod schema check then we will 
    // make the todo that they provided the ID of and 
    // mark them as completed.

    // once we have found it we just update the
    // completed field and change it to true.
    await Todo.update({
        _id: req.body._id
    }, {
        completed: true
    })

    res.status(200).json({
        message: "todo marked as completed!"
    })
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})