var express = require("express");
var path = require("path");
var fs = require('fs-extra');
var songListPath = path.join(__dirname, "..", "data", "thesonglist.json");
var galleryPath = path.join(__dirname, "..", "data", "gallery.json");


var router = express.Router();

router.get("/api/thesonglist", function(req, res)
{
	fs.readJson(songListPath)
	.then(function(list)
	{
		console.log(list)
		res.json(list);
	})
	.catch(function(err)
	{
		console.log(err);
	})
})

router.get("/api/gallery", function(req, res)
{
	fs.readJson(galleryPath)
	.then(function(list)
	{
		console.log(list)
		res.json(list);
	})
	.catch(function(err)
	{
		console.log(err);
	})	
})

module.exports = router;