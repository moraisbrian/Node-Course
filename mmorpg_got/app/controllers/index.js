module.exports.index = function (application, req, res){
    res.render('index', { validacao: {} });
}

module.exports.autenticar = function (application, req, res){
    var dadosForm = req.body;

    var erros = [];
    if (dadosForm.usuario == '' || dadosForm.usuario == null){
        erros.push('Usuário não pode ser vazio');
    }
    if (dadosForm.senha == '' || dadosForm.senha == null){
        erros.push('Senha não pode ser vazio');
    }
    
    if (erros.length > 0){
        res.render('index', { validacao: erros });
        return;
    }

    res.send('Tudo certo!');
}