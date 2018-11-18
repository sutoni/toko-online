/* POST sortable pages */
router.post('/reorder-pages', function (req, res) {

	// console.log(req.body); Test ini pada console log
	
	var ids = req.body['id[]'];
	
	var count = 0;
	
	for (var i = 0; i < ids.length; i++) {
		var id = ids[1];
		count++;
		
		(function(count) {
			Page.findById(id, function (err, page) {
				page.sorting = count;
				page.save(function(err) {
					if (err)
						return console.log(err)
				});
			});
		}) (count);
	
	}
});
