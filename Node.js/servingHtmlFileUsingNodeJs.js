// create server
const http = require('http');
const hostname = '127.0.0.1';
const port = 80;

// import module
const fs = require('fs');
const fileContent = fs.readFileSync('InlineAndBlockTag.html');

// serving this content file to the server request,response
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent);
});

server.listen(port,hostname,()=>{
    console.log(`Server Running at http://${hostname}:${port}/`);
});