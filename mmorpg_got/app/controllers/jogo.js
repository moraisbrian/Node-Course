module.exports.jogo = function (application, req, res) {
    if (req.session.autorizado !== true) {
        res.send('Necessário fazer login');
        return;
    }

    var msg = '';
    if (req.query.msg != ''){
        msg = req.query.msg;
    }

    var usuario = req.session.usuario;
    var casa = req.session.casa;
    var connection = application.config.dbConnection;
    var jogoDAO = new application.app.models.jogoDAO(connection);

    jogoDAO.iniciaJogo(res, usuario, casa, msg);
    
}

module.exports.sair = function (application, req, res) {
    req.session.destroy(function (err){
        res.render('index', { validacao: {} });
    })
}

module.exports.suditos = function (application, req, res) {
    if (req.session.autorizado !== true) {
        res.send('Necessário fazer login');
        return;
    }
    res.render('aldeoes', { validacao: {} });
}

module.exports.pergaminhos = function (application, req, res) {
    if (req.session.autorizado !== true) {
        res.send('Necessário fazer login');
        return;
    }
    var connection = application.config.dbConnection;
    var jogoDAO = new application.app.models.jogoDAO(connection);

    var usuario = req.session.usuario;

    jogoDAO.getAcoes(usuario, res);
}

module.exports.ordenar_acao_sudito = function (application, req, res) {
    if (req.session.autorizado !== true) {
        res.send('Necessário fazer login');
        return;
    }
    
    var dadosForm = req.body;

    var erros = [];
    if (dadosForm.acao == '' || dadosForm.acao == null){
        erros.push('Ação deve ser informada');
    }
    if (dadosForm.quantidade == '' || dadosForm.quantidade == null){
        erros.push('Quantidade deve ser informada');
    }
    
    if (erros.length > 0){
        res.redirect('jogo?msg=A');
        return;
    }

    var connection = application.config.dbConnection;
    var jogoDAO = new application.app.models.jogoDAO(connection);

    dadosForm.usuario = req.session.usuario;
    jogoDAO.acao(dadosForm);

    res.redirect('jogo?msg=B')
}