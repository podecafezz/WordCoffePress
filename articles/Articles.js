const Sequelize = require("sequelize");
const connection = require("../database/database");//quando vc quer voltar um diretório, só usar dois pontos ..
const Category = require("../categories/Category");


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

Category.hasMany(Article);
Article.belongsTo(Category);

//Article.sync({force: true}); // vai sincronizar esse model com as tabelas no banco de dados// Foi removido por que já foi criado as tabelas

module.exports = Article;