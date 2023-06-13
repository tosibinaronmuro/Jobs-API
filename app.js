require("dotenv").config();
const express = require("express");
require("express-async-errors");
const errorHandler = require("./middleware/error-handler");
const notFoundHandler = require("./middleware/not-found");
const connectDB = require("./database/connect");
const Authrouter = require("./routes/routes");
const Jobsrouter = require("./routes/jobs-route");
const authMiddleware = require("./middleware/auth");
const app = express();

app.use(express.json());

 
app.use("/api/v1/auth", Authrouter);
app.use("/api/v1/jobs", authMiddleware, Jobsrouter);

// error handler
app.use(errorHandler);
app.use(notFoundHandler);

// start
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`app is running on port ${port}`))
    
  } catch (error) {
    console.log(error)
  }
};

start();
