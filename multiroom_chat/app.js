var app = require('./config/server');

var server = app.listen(80, function () {
    console.log('Server on');
});

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function (socket){
    console.log('conectou');

    socket.on('disconnect', function(){
        console.log('desconectou');
    })
});