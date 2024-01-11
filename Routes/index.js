const { addTodo, getAllTodo, deleteTodo, updateTodo } = require('../controller');

const app=require('express').Router();

app.post('/todo',addTodo);
app.get('/',getAllTodo);
app.delete('/todo/:id',deleteTodo);
app.patch('/todo/:id',updateTodo);
