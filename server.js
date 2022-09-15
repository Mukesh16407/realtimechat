const express = require("express");
const path = require('path');
const http = require('http');
const {Server} = require("socket.io")

const app  = express();
const server = http.createServer(app)
const cors = require("cors")


const PORT  = process.env.PORT  || 5000

app.use(cors());



const io = new Server(server, {
  cors:{
    origin:["http://localhost:3000","https://groupchat-project.herokuapp.com"],
    methods: ["GET", "POST"]
  }
})


io.on("connection", (socket)=> {
  console.log('user connected', socket.id);
  socket.on("send_message", (data)=> {
      console.log(data);
      socket.broadcast.emit("receive_message", data)
  })
})




app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});
server.listen(PORT,()=> {
    console.log("server is Runnig")
  })
  
// app.listen(PORT , ()=> {
//     console.log("this app is listting to ", PORT )
// })
