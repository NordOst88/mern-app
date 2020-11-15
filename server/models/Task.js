const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  description: { type: String },
  owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Task", schema);
