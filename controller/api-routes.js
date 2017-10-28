var express = require("express");
var path = require("path");
var fs = require('fs-extra');
var nodemailer = require('nodemailer');
var songListPath = path.join(__dirname, "..", "data", "thesonglist.json");
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

router.post("/submit", function(req, res)
{
	console.log(req.body)

	var message = req.body.message+"\n"
	+"Contact's Name: "+req.body.name+"\n"
	+"Contact's Email: "+req.body.email

	var mailOptions = 
	{
		from: 'luketotom@gmail.com',
		to: 'lukekeltner@yahoo.com',
		subject: req.body.subject,
		text: message
	};

	transporter.sendMail(mailOptions, function(error, info)
	{
		if (error) 
		{
			console.log(error);
		} 
		else 
		{
			console.log('Email sent: ' + info.response);
		}
	});
})

module.exports = router;