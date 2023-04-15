// "use strict";
var http = require("http").createServer(handler); //require http server, and create server with function handler()
var fs = require("fs"); //require filesystem module
var io = require("socket.io")(http); //require socket.io module and pass the http object (server)

http.listen(8080, console.log("running on port 8080")); //listen to port 8080

function handler(req, res) {
  //create server
  fs.readFile(
    "/Users/abhishekkhande/Documents/Personal Work/home_auto/Home_Auto/frontend/public/index.html",
    function (err, data) {
      //read file index.html in public folder
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" }); //display 404 on error
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" }); //write HTML
      res.write(data); //write data from index.html
      return res.end();
    }
  );
}

io.sockets.on("connection", function (socket) {
  // WebSocket Connection
  var lightvalue = 0; //static variable for current status
  socket.on("light", function (data) {
    //get light switch status from client
    lightvalue = data;
    if (lightvalue) {
      console.log(lightvalue); //turn LED on or off, for now we will just show it in console.log
    }
  });
});
// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const app = express();

// const connectdb = require("./config/database");
// const userRoute = require("./routes/userRoutes");
// const homeRoute = require("./routes/homeRoutes");

// app.use(express.json());

// dotenv.config();
// connectdb();

// // app.use(cors());

// //Router
// app.use("/users", userRoute);
// app.use("/users", homeRoute);

// app.get("/", (req, res) => {
//   res.send("api is running on port 8081");
// });

// app.listen(8081, console.log("api is running"));
