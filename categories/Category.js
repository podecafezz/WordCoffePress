const Sequelize = require("sequelize");
const connection = require("../database/database");//quando vc quer voltar um diretório, só usar dois pontos ..


const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {// esse vai ser o endereço da categoria
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Category.sync({force: true})// vai sincronizar esse model com as tabelas no banco de dados// Foi removido por que já foi criado as tabelas

module.exports = Category;
