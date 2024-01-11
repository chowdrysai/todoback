const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://chowdrysai45:sonu1234@cluster0.02ljlun.mongodb.net/todo', {
})
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error)
    })
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });