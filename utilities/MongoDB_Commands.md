## Comandos MongoDB

- Utilitário **mongod.exe** inicializa o servidor. É necessário existir a pasta C:\data\db

- Utilitário **mongo.exe** acessa o sgbd após estar inicializado.

- Os comandos são *case sensitive*

***

### Operadores

| SQL    | MongoDB |
| :----: | :----:  |
| =      | $eq     |
| >      | $gt     |
| >=     | $gte    |
| <      | $lt     |
| <=     | $ltr    |
| !=/<>  | $ne     |

***

- **show dbs** exibe os bancos de dados.

- **use nome_banco** altera para o banco, caso o banco não exista ele é criado, porém, só aparecera na lista após existir algum registro.

- **db.nome_colecao.save({Coluna: valor})** insere dados na tabela.

- **db.dropDatabase()** server para excluir o banco atual.

- **db.createCollection("nome_colecao")** cria uma nova coleção.

- **db.getCollectionNames()** exibe todas as coleções de um banco.

- **db.nome_colecao.drop()** remove a coleção

- **db.nome_colecao.findOne()** traz o ultimo registro inserido.

- **db.nome_colecao.find()** traz todos os registros
    - **db.nome_colecao.find().pretty()** tem o mesmo efeito, porém, indenta os registros.
    - **db.nome_colecao.find({chave: {operador: valor}}).pretty()**
    comando com restrição.
        - Exemplo: db.alunos.find({nome: {$eq: "Fulano"}}).pretty()

- **db.nome_colecao.update({parametros para atualizacao}, {$set}, {multi: false})** update de registro.
    - Exemplo: db.alunos.update({nome: "José"}, {$set: {nome: "Antonio"}}, {multi: false})
    - O parametro multi quando false executa apenas na primeira ocorrencia, caso esteja true execulta em todas.
    - É possivel fazer um update com o *save*, porém, é necessário passar o id do registro, caso não seja encontrado é criado um novo registro.

- **db.nome_colecao.remove({parametros para exclusao}, false)** exclusão de registro.
    - Exemplo: db.aluno.remove({nome: "Fulano", idade: {$gt: 30}}, false)
    - O primeiro parametro é semelhante ao where do sql.
    - O segundo parametro quando true ou 1 ira excluir apenas a primeira ocorrencia. Quando false ou 0 ou omitido ira excluir todas as ocorrencias.