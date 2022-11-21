const { StatusCodes } = require("http-status-codes");
const todoModel = require("../model/todo");

exports.getAll = async (req, res, next) => {
  const todos = await todoModel.find({}).sort("createdAt");
  res.status(StatusCodes.OK).json({ count: todos.length, todos });
};

exports.createTodo = async (req, res, next) => {
  const todo = await todoModel.create(req.body);
  res.status(StatusCodes.CREATED).json(todo);
};
