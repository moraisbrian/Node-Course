module.exports = (application) => {

    application.get('/noticia', (req, res) => {
        
        var connection = application.config.dbConnection();
        connection.query('select * from noticias where id_noticia = 2', (error, result) => {
            res.render("noticias/noticia", { noticia: result });
        });
    });
}