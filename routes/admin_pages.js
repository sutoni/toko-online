var express = require("express");
var router = express.Router();

//exports
router.get("/",function(req, res){
	 res.send("Admin area");
	//res.render("index",{
      //  title : "Happy Shopping"
    //});
   

});

//export
module.exports = router;
