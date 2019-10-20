module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", { validacao: null, noticia: {} });
}

module.exports.noticias_salvar = function (application, req, res) {
    var noticia = req.body;

    /**** Validação feita de forma manual, pois o express-validator não se encontra na mesma versão do curso ****/
    var erros = [];
    if (noticia.titulo == '' || noticia.titulo == null)
        erros.push({ "param": "titulo", "msg": "Título não pode ser vazio", "value": noticia.titulo });
    if (noticia.resumo == '' || noticia.resumo == null)
        erros.push({ "param": "noticia", "msg": "Resumo não pode ser vazio", "value": "" });
    if (noticia.resumo.length > 100 || noticia.resumo.length < 10)
        erros.push({ "param": "resumo", "msg": "Rusumo deve conter entre 10 e 100 caracteres", "value": "" });
    if (noticia.autor == '' || noticia.autor == null)
        erros.push({ "param": "autor", "msg": "Autor não pode ser vazio", "value": "" });
    if (noticia.data_noticia == null)
        erros.push({ "param": "data_noticia", "msg": "Data não pode ser vazia", "value": "" });
    if (noticia.noticia == null || noticia.noticia == '')
        erros.push({ "param": "noticia", "msg": "Noticia não pode ser vazia", "value": "" });

    if (erros.length > 0) {
        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }


    var connection = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    noticiasDAO.salvarNoticias(noticia, function (error, result) {
        res.redirect('/noticias');
    });
}