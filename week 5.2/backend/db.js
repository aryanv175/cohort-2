const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aryanverma:S8J0LAsOZ9hPsXZ0@cluster0.eitqolz.mongodb.net/todo-app");

/*
for the post /todo endpoint we need the body to be
something like this.
{
    title: string,
    description: string
}
*/

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}