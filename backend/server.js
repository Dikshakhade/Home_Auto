const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
// const server = http.createServer(app);
const connectdb = require("./config/database");

dotenv.config();
connectdb();

//Routees
const userRoute = require("./routes/userRoutes");
const homeRoute = require("./routes/homeRoutes");

//Router
app.use("/users", userRoute);
app.use("/users", homeRoute);

const PORT = process.env.PORT;
const server = app.listen(PORT, console.log(`Server Running on PORT ${PORT}`));

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
  console.log(`Connected to socket.io ${socket.id}`);
  socket.on("send_message", (data) => {
    console.log(data);
  });
});
