module.exports.cadastro = function (application, req, res){
    res.render('cadastro', { validacao: {}, dados: {}});
}

module.exports.cadastrar = function (application, req, res){
    var dadosForm = req.body;

    var erros = [];
    if (dadosForm.nome == '' || dadosForm.nome == null){
        erros.push('Nome não pode ser vazio');
    }
    if (dadosForm.usuario == '' || dadosForm.usuario == null){
        erros.push('Usuário não pode ser vazio');
    }
    if (dadosForm.senha == '' || dadosForm.senha == null){
        erros.push('Senha não pode ser vazio');
    }
    if (dadosForm.casa == '' || dadosForm.casa == null){
        erros.push('Casa não pode ser vazia');
    }
    
    if (erros.length > 0){
        res.render('cadastro', { validacao: erros, dados: dadosForm });
        return;
    }

    var connection = application.config.dbConnection;
    var usuariosDAO = new application.app.models.UsuariosDAO(connection);

    usuariosDAO.inserirUsuario(dadosForm);

    res.send('Podemos cadastrar');
}