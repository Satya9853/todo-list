// environment variable
require("dotenv").config();

// handling async errors
require("express-async-errors");

// security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");

// required packages
const express = require("express");
const bodyParser = require("body-parser");

// local imports
const todoRouter = require("./router/todo-route");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connectDB");

const app = express();

// package middleware
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.use("/api/v1", todoRouter);

/// error handling middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// starting server
const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
