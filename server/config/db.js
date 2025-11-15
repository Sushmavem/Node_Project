const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log("URI =", process.env.MONGODB_URI);  // <-- PRINT VALUE

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to MongoDB ✔");
  } catch (err) {
    console.error("MongoDB Error:", err);
  }
};

module.exports = connectDB;
