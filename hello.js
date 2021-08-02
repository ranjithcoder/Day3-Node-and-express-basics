//hello world with http

const http = require("http");

http.createServer((request,response) => {
    response.writeHead(200,{
        'Content-type':'text/plain'
    });
    response.write('Hello world\nits ranjith');
    response.end();
}).listen(900);

//hello world with express

const express = require("express");
const { response } = require("express");

const app = express();
const port = 3000;

app.get('/',(request,response) => {
    response.send('hello world');
})

app.listen(port,() => {
    console.log("the app is listening at port "+port);
})

