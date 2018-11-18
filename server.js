const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


const port = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, 'public'); //path.join(__dirname, 'public');

app.use(express.static(publicPath));

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(port, function(){
  console.log(`listening on *:${port}`);
});