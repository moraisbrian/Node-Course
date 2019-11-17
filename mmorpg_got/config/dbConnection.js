var mongo = require('mongodb');

var connMongoDB = function (){
    var db = new mongo.Db(
        'got', // nome do banco
        new mongo.Server(
            'localhost', // endereço do servidor
            27017, // porta de conexão, está sendo utilizada a padrão.
            {} // opções de configuração do servidor
        ),
        {} // opções de configuração do servidor    
    )
    return db;
}

module.exports = function (){
    return connMongoDB;
}