const { default: mongoose } = require('mongoose');
const mongooese = require('mongoose');
mongooese.connect('mongodb+srv://admin:admin@cluster0.ozbhuph.mongodb.net/todos?retryWrites=true&w=majority')
const  todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}