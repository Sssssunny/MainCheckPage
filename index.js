const express = require("express");
const http = require("http")
const socket = require("socket.io")
const odbc = require("odbc")

const app = express()
const server = http.createServer(app)

const io = socket(server)


app.get("/",(req,res)=>{
    res.send("서버")
})

io.on('connection',(socket)=>{
    console.log("client conn")


    socket.on('disconnect', () => {
        console.log('user disconn');
        });
})



app.listen(3000,()=>{
    console.log("서버오픈")
})