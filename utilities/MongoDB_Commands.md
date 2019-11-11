## Comandos MongoDB

- Utilitário **mongod.exe** inicializa o servidor. É necessário existir a pasta C:\data\db

- Utilitário **mongo.exe** acessa o sgbd após estar inicializado.

- Os comandos são *case sensitive*

***

### Operadores

| SQL    | MongoDB  |
| :----: | :----:   |
| =      | $eq      |
| >      | $gt      |
| >=     | $gte     |
| <      | $lt      |
| <=     | $ltr     |
| !=/<>  | $ne      |

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