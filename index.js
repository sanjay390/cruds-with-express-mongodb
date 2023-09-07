const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//Import routes
const productRoutes = require("./routes/Product");

//Middleware
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

app.listen(4000, () => console.log("server up and running on port 4000"));
