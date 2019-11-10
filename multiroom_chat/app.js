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
    });

    socket.on('msgParaServidor', function(data){
        // Dialogo
        socket.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem });
        socket.broadcast.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem });

        // Participantes
        if (parseInt(data.apelido_atualizado) == 0){
            socket.emit('participantesParaCliente', { apelido: data.apelido });
            socket.broadcast.emit('participantesParaCliente', { apelido: data.apelido });
        }
    });
});