const express = require('express')
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express()

// middleware
app.use(express.json());
//app.use(express.urlencoded({extended: false}));

app.use(express.urlencoded({ extended: false }));

// route
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API server!");
});


mongoose
  .connect(
    "mongodb+srv://DB_USER:PASSWORD@cluster0.svn21.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });