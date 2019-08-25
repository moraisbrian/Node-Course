/**** Removido após inserção do Consign ****/
//var dbConn = require('../../config/dbConnection');

module.exports = (application) => {

    application.get('/noticias', (req, res) => {
        
        /**** Removido após inserção do Consign ****/
        //var connection = dbConn();

        var connection = application.config.dbConnection();
        connection.query('select * from noticias', (error, result) => {
            res.render("noticias/noticias", { noticias: result });
        });
    });
}