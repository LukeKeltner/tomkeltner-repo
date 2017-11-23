$.ajax(
{
	url: '/api/thesonglisttest',
	type: 'GET'
}).done(function(data)
{
	
	var tBody = $('#table-body');
	for (var i=0; i<data.length; i++)
	{
		insert = $("<tr><td>"+data[i].title+"</td><td>"+data[i].artist+"</td><td>"+data[i].genre+"</td><td>"+data[i].year+"</td>"+"<td><button type='button' class='btn btn-danger delete' data-title='"+data[i].title+"' data-year='"+data[i].year+"'>Delete</button></td></tr>")
		tBody.append(insert)
	}

	 $('#thesonglist-table').DataTable();
})

$(document).on("click", ".delete", function(event)
{
	console.log($(this).data("title"))
	console.log($(this).data("year"))

	var data = 
	{
		title: $(this).data("title"),
		year: $(this).data("year")
	}

	$.ajax(
	{
		url: "/api/delete",
		type: "DELETE",
		data: data
	}).done(function(result)
	{
		window.location.reload()
	})
})

$("#undo").on("click", function(event)
{
	$.ajax(
	{
		url:"/undo",
		type: "POST",
	}).done(function(result)
	{
		window.location.reload()
	})
})

$("#add").on("submit", function(event)
{
	event.preventDefault();
	var data =
	{
		title: $("#title").val(),
		artist: $("#composer").val(),
		genre: $('#genre').val(),
		year: $('#year').val()
	}

	console.log(data)

	$.ajax(
	{
		url: "/api/addsong",
		type: "POST",
		data: data
	}).done(function(result)
	{
		window.location.reload()
	})
})