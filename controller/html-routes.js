var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/:location?", function(req, res)
{
	var chosen = req.params.location;
	console.log("Hey!!!!!!!!!!")

	if (chosen === "thesonglist")
	{
		res.sendFile(path.join(__dirname, "..", "public", "thesonglist.html"));
	}

	else if (chosen === "gallery")
	{
		res.sendFile(path.join(__dirname, "..", "public", "gallery.html"));
	}

	else if (chosen === "contact")
	{
		res.sendFile(path.join(__dirname, "..", "public", "contact.html"));
	}

	else if (chosen === "references")
	{
		res.sendFile(path.join(__dirname, "..", "public", "references.html"));
	}

	else if (chosen === "pricing")
	{
		res.sendFile(path.join(__dirname, "..", "public", "pricing.html"));
	}

	else
	{
		res.sendFile(path.join(__dirname, "..", "public", "index.html"));
	}
})

module.exports = router;