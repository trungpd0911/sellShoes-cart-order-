const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Router = require("./src/");
require("dotenv").config();
const { connectDb } = require("./src/models/index");

const app = express()
app.use(express.json());
const port = 3000

connectDb();

app.use('/api', Router);
app.get('/', (req, res) => {
  res.json({
    message: "Hello World"
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})