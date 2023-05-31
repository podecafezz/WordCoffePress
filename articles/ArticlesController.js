const express = require("express");
const router = express.Router();

router.get("/articles", (req,res) => {
    res.send("isso é uma rota de artigos")
});


router.get("/admin/articles/new", (req,res) => {
    res.send("isso é uma rota para criar novo categoria")
});


module.exports = router;