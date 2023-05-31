const Sequelize = require("sequelize");
const connection = require("../database/database");//quando vc quer voltar um diretório, só usar dois pontos ..


const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
            type: Sequelize.TEXT,
            allowNull: false
    }
});

module.exports = Article;