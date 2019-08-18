module.exports = (application) => {
    application.get('/formulario_inclusao_noticia', (req, res) => {
        res.render("admin/form_add_noticia");
    });
}