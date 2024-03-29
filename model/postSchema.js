const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },createdAt: {
        type: String,
        required: true
    },updatedAt: {
        type: String,
        required: true
    },completed:{
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Todo', postSchema);
