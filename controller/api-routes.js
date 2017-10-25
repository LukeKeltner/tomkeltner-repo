var express = require("express");
var path = require("path");
var fs = require('fs-extra');
var songListPath = path.join(__dirname, "..", "data", "thesonglist.json");

var router = express.Router();

/*router.get("/", function(req, res)
{
	res.end()
})*/

module.exports = router;