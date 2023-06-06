const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")

const Article = require("./articles/Articles");
const Category = require("./categories/Category");


//ViewEngine - O que vai ser exibido 
app.set('view engine','ejs');


//carregando arquivos estaticos
app.use(express.static('public'));

//body-parser - Para poder trabalhar com formulários
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// conect to database
connection
    .authenticate()
    .then(() => {
        console.log("Banco de Dados OK!");
    }).catch((error) => {
        console.log( error);
    })

app.use("/",categoriesController);
app.use("/",articlesController);

//exibindo a view 
app.get("/", (req, res) => {
    res.render("index");
});

//mensagem de start do servidor

app.listen(8080, () => {
    console.log("Servidor Iniciado!")
})
