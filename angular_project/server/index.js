const express = require("express");
const app = express();
const connectToMongoose = require("./db");
connectToMongoose();
const cors = require("cors");
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api',require('./routes/userdetails'));
app.use('/api',require('./routes/products.router'));

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
