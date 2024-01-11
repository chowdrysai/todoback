const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Todo = require('./model/postSchema');

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json()); // Add this line to parse JSON in the request body

mongoose.connect('mongodb+srv://chowdrysai45:sonu1234@cluster0.02ljlun.mongodb.net/todo')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

// Handle POST requests to /todo
app.post('/todo', async (req, res) => {
  try {
    const todoData = req.body;
    const date = new Date();

    // Create a new Mongoose model instance
    const newTodo = new Todo({
      ...todoData,
      date,
    });

    // Save the new todo to the database
    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
