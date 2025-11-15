require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/products", require("./routes/product.route.js"));

app.get("/", (req, res) => {
  res.send("Backend Working");
});

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
