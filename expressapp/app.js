const express = require('express');
const greetMiddleware = require('./greet');

const app = express();

app.use('/api/v1/',greetMiddleware({greeting:'hello world'})).listen(3000);

// go to http://localhost:3000/api/v1/greet to see output