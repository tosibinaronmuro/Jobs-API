require("dotenv").config();
const express = require("express");
require("express-async-errors");
const errorHandler = require("./middleware/error-handler");
const notFoundHandler = require("./middleware/not-found");
const connectDB = require("./database/connect");
const router = require("./routes/routes");
const app = express();

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/v1", router);

// error handler
app.use(errorHandler);
app.use(notFoundHandler);

// start
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  } catch (error) {}
};

start();
