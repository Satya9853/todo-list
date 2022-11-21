const express = require("express");
const todoController = require("../controller/todo-controller");

const router = express.Router();

router.route("/getAll").get(todoController.getAll);

router.route("/createTodo").post(todoController.createTodo);

module.exports = router;
