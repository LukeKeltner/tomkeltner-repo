$("#submit-email").on("submit", function(event)
{
	event.preventDefault();

	var name = $('#name').val();
	var email = $('#email').val();
	var subject = $('#subject').val();
	var message = $('#message').val();

	var data = 
	{
		name: name,
		email: email,
		subject: subject,
		message: message
	};

	console.log(data);

	$.ajax(
	{
		url: "/submit",
		type: "post",
		data: data
	}).then(function(response)
	{
		if (response === "Error")
		{
			$("#email-error").show()
		}

		else
		{
			$('#email-sent').modal("show")
			$('#name').val("");
			$('#email').val("");
			$('#subject').val("");
			$('#message').val("");
		}
		
	})

})
