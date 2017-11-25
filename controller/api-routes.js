var express = require("express");
var path = require("path");
var fs = require('fs-extra');
var nodemailer = require('nodemailer');
var songListPath = path.join(__dirname, "..", "data", "thesonglist.json");
var songListTestPath = path.join(__dirname, "..", "data", "thesonglisttest.json");
var undoSongListTest = path.join(__dirname, "..", "data", "undodeletesonglist.json");
var galleryPath = path.join(__dirname, "..", "data", "gallery.json");

var router = express.Router();

var transporter = nodemailer.createTransport(
{

	host: "smtp.gmail.com",
	secure: false,
	port: 587,
	auth:
	{
		user: 'luketotom@gmail.com',
		pass: 'cvoyhqbnalkvltlr'
	}
});

router.get("/api/thesonglist", function(req, res)
{
	fs.readJson(songListPath)
	.then(function(list)
	{
		res.json(list);
	})
	.catch(function(err)
	{
		console.log(err);
	})
})

router.get("/api/thesonglisttest", function(req, res)
{
	fs.readJson(songListTestPath)
	.then(function(list)
	{
		res.json(list);
	})
	.catch(function(err)
	{
		console.log(err);
	})
})

router.delete("/api/delete", function(req, res)
{
	fs.readJson(songListPath)
	.then(function(list)
	{

		fs.writeJson("./data/undodeletesonglist.json", list)

		for (var i=0; i<list.length; i++)
		{
			if (req.body.title === list[i].title && req.body.year === list[i].year)
			{
				console.log("deleteing...")
				console.log(list[i].title)
				list.splice(i, 1)

				fs.writeJson("./data/thesonglist.json", list)
			}
		}

		res.end()
	})
	.catch(function(err)
	{
		console.log(err);
	})
})

router.post("/api/addsong", function(req, res)
{
	fs.readJson(songListPath)
	.then(function(list)
	{
		list.push(req.body)

		fs.writeJson(songListPath, list)

		res.end()
	})
	.catch(function(err)
	{
		console.log(err);
	})
})

router.post("/undo", function(req, res)
{
	fs.readJson(undoSongListTest)
	.then(function(list)
	{
		fs.writeJson("./data/thesonglist.json", list)
		res.end()
	}).catch(function(err)
	{
		console.log(err)
	})
})

router.get("/api/gallery", function(req, res)
{
	fs.readJson(galleryPath)
	.then(function(list)
	{
		res.json(list);
	})
	.catch(function(err)
	{
		console.log(err);
	})	
})

router.post("/submit", function(req, res)
{

	var message = req.body.message+"\n"
	+"Contact's Name: "+req.body.name+"\n"
	+"Contact's Email: "+req.body.email

	var mailOptions = 
	{
		from: 'luketotom@gmail.com',
		to: 'tomrkeltner@yahoo.com',
		subject: req.body.subject,
		text: message
	};

	transporter.sendMail(mailOptions, function(error, info)
	{
		if (error) 
		{
			console.log(error);
			res.send("Error")
		} 

		else 
		{
			res.send("")
		}
	});
})

router.get("/api/:password", function(req, res)
{
	if (req.params.password === '2961044')
	{
		res.send("correct")
	}

	else
	{
		res.send("wrong")
	}
})

module.exports = router;