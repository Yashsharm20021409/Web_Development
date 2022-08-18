const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

const hostname = '127.0.0.1';
const port  = 3000;
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('./about.html');
const contact = fs.readFileSync('./contact.html');
const service = fs.readFileSync('./service.html');

const server = http.createServer((req,res)=>{
    let url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');


    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/service'){
        res.end(service);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port,hostname,()=>{
    console.log(`Server Listening at http://${hostname}:${port}/`);
});

// This is Just Demo we will not use this if else to create custom backend we will use express module to do so