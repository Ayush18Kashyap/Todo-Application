const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/Todos', async function(req, res) {
    const todos = await todo.find() // Get all todos from the DB
    console.log(todo);//find gives promise, so we need to use await
    res.json(todo);// send the todos as a response
})




app.post('/Todos', async function (req, res) {
    const createPayload = req.body
    //(safeParse) Validate the payload from zod. It is a method in zod to validate the payload
    const paresedPayload = createTodo.safeParse(createPayload);
    if (!paresedPayload.success) {
        return res.status(411).json({ msg: 'you have sent he wrong inputs', });
        return;
    }
    //put in mongodb. craete is one of the of CRUD operations
    //todo is the model we created in db.js
    await todo.create({
        title: createPayload.title,
        description: createPayload.descriptioon,
        completed: false // default value for completed
    })

    res.json({ msg: 'Todo created successfully'});
})




app.put('/completed', async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        return res.status(411).json({ msg: 'you have sent the wrong inputs', });
        return;
    }
    await todo.update({
        _id: updatePayload.id
    }, {
        completed: true // mark the todo as completed
    })
    // If the payload is valid, you can proceed with your logic
    
})

app.listen(3000)

