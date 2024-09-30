const express = require("express");
const { connectMongoDb } = require("./connection");

const { logReqRes } = require("./middlewares");

const userRouter = require("./routes/user");

const app = express();
const PORT = 4000;

//Connection
connectMongoDb("mongodb://localhost:27017/genuine").then(() =>
  console.log("MongoDb Connected")
);

//Middleware

app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));
// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server Started at PORT :${PORT}`));
