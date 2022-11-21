const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: [true, "please enter your todo Task"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TODO", todoSchema);
