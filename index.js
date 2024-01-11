const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Todo = require('./model/postSchema');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://chowdrysai45:sonu1234@cluster0.02ljlun.mongodb.net/todo', {
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

app.post('/todo', async (req, res) => {
  try {
    const todoData = req.body;
    const date = new Date();

    const newTodo = new Todo({
      ...todoData,
      date,
    });

    await newTodo.save();

    res.status(201).json(newTodo);

  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', async (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
