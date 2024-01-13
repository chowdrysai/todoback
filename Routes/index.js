const app=require('express').Router();
const { addTodo, getAllTodo, deleteTodo, updateTodo, updateStatus } = require('../controller');

app.post('/todo',addTodo);
app.get('/',getAllTodo);
app.delete('/todo/:id',deleteTodo);
app.patch('/todo/:id',updateTodo);
app.patch('/todo/status/:id',updateStatus);


module.exports=app