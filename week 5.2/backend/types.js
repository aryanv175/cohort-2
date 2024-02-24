const z = require("zod");

/*
for the post /todo endpoint we need the body to be
something like this.
{
    title: string,
    description: string
}

for the get /todos they are just asking for all the todos
so no schema needs to be followed, since there is no imput

for the put request /completed, the user will provide
in the body, the id of the todo they want to mark as
completed.
{
    id: string
}
*/

const createTodo = z.object({
    title: z.string(),
    description: z.string()
});

const updateTodo = z.object({
    id: z.string()
});


module.exports= {
    createTodo: createTodo,
    updateTodo: updateTodo
}