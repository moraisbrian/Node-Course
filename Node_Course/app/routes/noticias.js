module.exports = (application) => {
    application.get('/noticias', (req, res) => {
        res.render("noticias/noticias");
    });
}