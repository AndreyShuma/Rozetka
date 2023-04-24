const express = require('express');
const test = require('./public/test');
const loadeRouter = require('./router/loadRouter');

const server = express();
console.log('Server work >>>>>>>>');

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.use(express.static(__dirname + '/public'));

server.use('/', loadeRouter);


server.listen(3000);
