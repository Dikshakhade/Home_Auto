const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

app.use(express.json());
app.use(cors());

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

// app.get("/", (req, res) => {
//   res.send("api is running on port 5001");
// });

// app.listen(5001, console.log("api is running"));
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
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// server.listen(5001, () => {
//   console.log("Server is running");
// });
