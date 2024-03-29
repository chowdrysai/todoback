const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Todo = require('./model/postSchema');

const Route=require('./Routes')
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

app.use('/',Route)
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
