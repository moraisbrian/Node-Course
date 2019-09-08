module.exports = function (application) {

    application.get('/noticia', function (req, res) {
        
        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, function (error, result){
            res.render("noticias/noticia", { noticia: result });
        });

        /****Removido após inclusão de models****/
        //connection.query('select * from noticias where id_noticia = 2', function (error, result) {
        //    res.render("noticias/noticia", { noticia: result });
        //});
    });
}