const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res) => {
fs.readFile("data.txt",(err,data) => {
    res.write(data);
    res.end();
});

});

server.listen(3000,"127.0.0.1",()=>{
    console.log("listening on 127.0.0.1:3000");
});