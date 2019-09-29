module.exports = function (application) {
    application.get('/formulario_inclusao_noticia', function (req, res) {
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function (req, res) {
        var noticia = req.body;

        var erros = [];
        if (noticia.titulo == '' || noticia.titulo == null)
            erros.push('Título não pode ser vazio');
        if (noticia.resumo == '' || noticia.resumo == null)
            erros.push('Resumo não pode ser vazio');
        if (noticia.resumo.length > 100 || noticia.resumo.length < 10)
            erros.push('Rusumo deve conter entre 10 e 100 caracteres');
        if (noticia.autor == '' || noticia.autor == null)
            erros.push('Autor não pode ser vazio');
        if (noticia.data_noticia == null)
            erros.push('Data não pode ser vazia');
        
        if (erros){
            res.render("admin/form_add_noticia");
            return;
        }


        var connection = application.config.dbConnection();
        var noticiasDAO = new application.app.models.NoticiasDAO(connection);

        noticiasDAO.salvarNoticias(noticia, function (error, result) {
            res.redirect('/noticias');
        });
    });
}