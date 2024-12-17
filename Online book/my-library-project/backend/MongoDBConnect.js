const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/BooksData"; // Update database name if needed

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("MongoDB connected successfully");
});

module.exports = mongoose;
