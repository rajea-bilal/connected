const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Quote", QuoteSchema);