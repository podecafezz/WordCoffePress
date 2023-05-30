const Sequelize = require("sequelize");// para chamar o Sequelize

const connection = new Sequelize('wordcoffepress','root','Cafe@123',{ //qual banco ele vai se conectar e com qual login e senha que vai ser
    host: 'localhost', // se eu tivesse um ip de banco, teria que colocar aqui
    dialect: 'mysql' //qual o tipo de banco de dados 
});

module.exports = connection;