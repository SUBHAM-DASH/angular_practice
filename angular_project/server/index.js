const express = require("express");
const app = express();
const connectToMongoose = require("./db");
connectToMongoose();
const cors = require("cors");
const multer = require("multer");
const port = 9000;
const uploadDocs = require("./middleware/upload");
// middleware
app.use(express.json());
app.use(cors());
app.use(express.static('uploads/employee_details'));
//Application label middleware
// app.use(
//   uploadDocs.fields([
//     { name: "pimage", maxCount: 1 },
//     { name: "doc", maxCount: 1 },
//   ])
// );

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Cache-control", "no-cache, no-store, must-revalidate");
  next();
});

// routes
app.use("/api", require("./routes/userdetails"));
app.use("/api", require("./routes/products.router"));
app.use("/api", require("./routes/employee"));
app.use("/api", require("./routes/candidate"));

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
