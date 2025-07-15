const { default: mongoose } = require('mongoose');
const mongooese = require('mongoose');
mongooese.connect('mongodb+srv://admin:admin@cluster0.ozbhuph.mongodb.net/todos?retryWrites=true&w=majority')
const  todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
// todos is the name of the collection in mongodb
// mongoose will automatically create a collection named 'todos' in the database
//todo is the model we created in db.js
// It is used to interact with the todos collection in the database
const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}