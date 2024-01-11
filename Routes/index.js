const app=require('express').Router();
const { addTodo, getAllTodo, deleteTodo, updateTodo } = require('../controller');

app.post('/todo',addTodo);
app.get('/',getAllTodo);
app.delete('/todo/:id',deleteTodo);
app.patch('/todo/:id',updateTodo);

module.exports=app