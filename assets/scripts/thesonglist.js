$.ajax(
{
	url: '/api/thesonglist',
	type: 'GET'
}).done(function(data)
{
	
	tBody = $('#table-body');
	for (var i=0; i<data.length; i++)
	{
		insert = $("<tr><td>"+data[i].title+"</td><td>"+data[i].artist+"</td><td>"+data[i].genre+"</td><td>"+data[i].year+"</td></tr>")
		tBody.append(insert)
	}

	 $('#thesonglist-table').DataTable();

	//var c = document.getElementById("thesonglist-table_filter").children;
	//c[0].innerHTML = 'Search for a Song:	<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="thesonglist-table">'

})


