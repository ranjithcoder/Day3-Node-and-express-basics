// with http

const http = require('http');

let routes = {
    '/' : function index(request,response){
        response.writeHead(200);
        response.end('hello world');
    },
    '/foo': function foo(request,response){
        response.writeHead(200);
        response.end('I am in foo');
    },
    '/foo/of': function of(request,response){
       response.writeHead(200);
       response.end('I am in of');
    }

}

const port = 3000;

http.createServer((request,response) => {
    console.log('listen at port '+port);
    if(request.url in routes){
        return routes[request.url](request,response);
    }
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
}).listen(port)

// with express

const express = require('express');
const app = express();

app.get('/path1',(req,res,next) => {
    //some code
})

// similarly we can use put,post,delete operations.
// we can also chain like below
app
  .route("/myPath")
  .get(function (req, res, next) {})
  .post(function (req, res, next) {})
  .put(function (req, res, next) {});