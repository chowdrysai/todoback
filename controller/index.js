const Todo=require('../model/postSchema')
const addTodo=async (req, res) => {
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
  };

 const getAllTodo=  async (req, res) => {
    try {
      const todos = await Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      console.error('Error getting todos:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
const deleteTodo=  async (req, res) => {
    try {
      const { id } = req.params;
      await Todo.findByIdAndDelete(id);
      res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
      console.error('Error deleting todo:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}
const updateTodo=  async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(todo);
    } catch (error) {
      console.error('Error updating todo:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports={
    addTodo,
    getAllTodo,
    deleteTodo,
    updateTodo,
}
  