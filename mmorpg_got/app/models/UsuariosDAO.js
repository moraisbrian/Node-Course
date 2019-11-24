function UsuariosDAO(connection) {
    this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function (usuario) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection("usuarios", function (err, collection) {
            collection.insert(usuario);

            mongoclient.close();
        });
    });
}

UsuariosDAO.prototype.autenticar = function (usuario, req, res) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection("usuarios", function (err, collection) {
            collection.find(usuario).toArray(function (err, result) {
                if (result[0] != undefined) {
                    req.session.autorizado = true;
                    req.session.usuario = result[0].usuario;
                    req.session.casa = result[0].casa;
                }

                if (req.session.autorizado){
                    res.redirect('jogo');
                }
                else {
                    res.render('index', { validacao: {} })
                }
            });
            mongoclient.close();
        });
    });
}
module.exports = function () {
    return UsuariosDAO;
}

/*
Quando o valor de pesquisa possui a mesma estrura do documento e a consulta será de igualdade, não é necessário
especificar a consulta. Pode-se passar o parâmetro da função direto.

Exemplo: função autenticar.

Consulta que seria feita:
collection.find({usuario: { $eq: usuario.usuario }, senha: { $eq: usuario.senha }});

Estrutura do parâmetro:
{usuario: usuario.usuario, senha: usuario.senha}
*/