const express = require("express");
// const path = require("path");
const app = express();
const { mongodbURL, PORT } = require("./config");
const mongoose = require("mongoose");
const cors = require('cors');
const booksRoute = require("./routes/bookRoute")
//all origins allowed
app.use(cors())
//allow custom origin
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );
//middleware for parsing request body
app.use(express.json());
app.get("/", (req, res) => {
  // console.log(req)
  res.status(234).send("Welcome to book store");
});

app.use('/books',booksRoute);
//serving
mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT, () => {
  console.log("server is listening on port:" + PORT);
});

