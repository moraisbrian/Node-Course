module.exports.iniciaChat = function (application, req, res) {
    
    var dadosForm = req.body;
    var erros = [];
    if (dadosForm.apelido == '' || dadosForm.apelido == null)
        erros.push('Nome ou apelido é obrigatório');
    if (dadosForm.apelido.length > 15 || dadosForm.apelido.length < 3)
        erros.push('Nome ou apelido deve conter entre 3 e 15 caracteres');
    
    if (erros.length > 0){
        res.render('index', { validacao: erros });
        return;
    }

    application.get('io').emit('msgParaCliente',
<<<<<<< HEAD
        { apelido: dadosForm.apelido, mensagem: ' acabou de logar no chat!' });
=======
        { apelido: dadosForm.apelido, mensagem: 'acabou de logar no chat!' });
>>>>>>> 9927529bb2f41daba7bf0c8304bb0682be618e96
    
    res.render('chat');
}