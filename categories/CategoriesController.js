const express = require("express");
const router = express.Router();

router.get("/categories", (req,res) => {
    res.send("isso é uma rota de categoria")
});


router.get("/admin/categorias/new", (req,res) => {
    res.send("isso é uma rota de admin categoria")
});


module.exports = router;