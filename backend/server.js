const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

const connectdb = require("./config/database");
const userRoute = require("./routes/userRoutes");
const homeRoute = require("./routes/homeRoutes");

app.use(express.json());

dotenv.config();
connectdb();

// app.use(cors());

//Router
app.use("/users", userRoute);
app.use("/users", homeRoute);

app.get("/", (req, res) => {
  res.send("api is running on port 5000");
});

app.listen(5000, console.log("api is running"));
