const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();

app.use(express.json());

app.get('/Todos', function(req, res) {
    
})


app.post('/Todos', function (req, res) {
    const createPayload = req.body
    //(safeParse) Validate the payload from zod. It is a method in zod to validate the payload
    const paresedPayload = createTodo.safeParse(createPayload);
    if (!paresedPayload.success) {
        return res.status(411).json({ msg: 'you have sent he wrong inputs', });
        return;
    }
})

    // If the payload is valid, you can proceed with your logic}

app.put('/completed', function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        return res.status(411).json({ msg: 'you have sent the wrong inputs', });
        return;
    }

    // If the payload is valid, you can proceed with your logic
    
})

