var app = require('./config/server');

var server = app.listen(80, function () {
    console.log('Server on');
});

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function (socket){
    console.log('conectou');
<<<<<<< HEAD
=======

    socket.on('disconnect', function(){
        console.log('desconectou');
    })
>>>>>>> 9927529bb2f41daba7bf0c8304bb0682be618e96
});