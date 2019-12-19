module.exports.jogo = function (application, req, res) {
    if (req.session.autorizado !== true) {
        res.send('Necessário fazer login');
        return;
    }

    var comando_invalido = 'N';
    if (req.query.comando_invalido == 'S'){
        comando_invalido = 'S';
    }

    var usuario = req.session.usuario;
    var casa = req.session.casa;
    var connection = application.config.dbConnection;
    var jogoDAO = new application.app.models.jogoDAO(connection);

    jogoDAO.iniciaJogo(res, usuario, casa, comando_invalido);
    
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
    res.render('pergaminhos', { validacao: {} });
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
        res.redirect('jogo?comando_invalido=S');
        return;
    }

    res.send('Tudo ok');
}