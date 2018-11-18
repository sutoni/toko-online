var express = require("express");
var router = express.Router();

//exports
router.get("/",function(req, res){
    res.render("index",{
        title : "Happy Shopping"
    });
    //res.send("ini adalah index yaa ok")

});

//export
module.exports = router;
