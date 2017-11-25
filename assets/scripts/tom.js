$('#submit-password').on("click", function(event)
{
	var password = $('#password').val()
	$.ajax(
	{
		url: '/api/'+password,
		type: 'GET',
	}).done(function(result)
	{
		if (result === "correct")
		{
			sessionStorage.setItem('Tom', true);
			window.location = "/editsongs"
		}

		else
		{
			$('#wrong-password').show()
		}
	})
})