/**** Removido após inserção do Consign ****/
//var dbConn = require('../../config/dbConnection');

module.exports = function (application) {

    application.get('/noticias', function (req, res) {
        
        /**** Removido após inserção do Consign ****/
        //var connection = dbConn();

        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function (error, result) {
            res.render("noticias/noticias", { noticias: result });
        });

        /****Removido após inplementação de models****/
        //connection.query('select * from noticias', function (error, result) {
        //    res.render("noticias/noticias", { noticias: result });
        //});
    });
}