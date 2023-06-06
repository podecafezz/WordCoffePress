const express = require("express");
const router = express.Router();

router.get("/categories", (req,res) => {
    res.send("isso é uma rota de categoria")
});

/*router.get("/categories/save", (req,res) =>{
    var title = req.body.title;
    
})*/

router.get("/admin/categories/new", (req,res) => {
	res.render("admin/categories/new");
});


module.exports = router;