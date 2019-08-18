var app = require('./config/server');
var routeNoticias = require('./app/routes/noticias')(app);
var routeHome = require('./app/routes/home')(app);
var routeFormAddNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, () => {
    console.log('Server On');
});