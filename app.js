const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
let port = 3000;

process.argv.forEach((val, idx) => {
  if (idx === 2) {
    port = parseInt(val);
  }
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("message", (data) => {
    console.log(`Message received: ${data}`);
    socket.broadcast.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

app.use(express.static("front"));

app.get("/head", (req, res) => {
  res.json(`여기 포트는: ${port}`);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
