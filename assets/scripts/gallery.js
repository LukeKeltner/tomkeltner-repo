pics = [];

$.ajax(
{
	url: '/api/gallery',
	type: 'GET'
}).done(function(data)
{
	pics = data;
	if (data.length%4 == 0)
	{
		var amountOfRows = Math.floor(data.length/4)
	}

	else 
	{
		var amountOfRows = Math.floor(data.length/4)+1
	}

	var picNumber = 0;

	for (var i=0; i<amountOfRows; i++)
	{
		var newRow = $("<div class='row'>")
		
		for (var j=0; j<4; j++)
		{
			if (picNumber < data.length)
			{
				var newCol = $("<div class='col-md-3'>")
				var newCard = $("<div class='card text-white bg-dark text-center' index='"+picNumber+"' style='height:250px; overflow:hidden;'>"
							+"<img class='card-img' src='"+data[picNumber].src+"' alt='Card image' style='width:500px;'/>"
							  	+"<div class='card-img-overlay'>"
							    +"<h4 class='card-text'><div style='background-color: rgba(0, 0, 0, 0.5);border-radius: 4px;'>"+data[picNumber].title+"</div></h4>"
							  +"</div>"
							+"</div>");

				newCol.append(newCard)
				newRow.append(newCol)
				picNumber = picNumber + 1;
			}

			else
			{
				break;
			}
		}

		$('#image-container').append(newRow)
	}
})

$(document).on("click", ".card", function(event)
{
	var index = $(this).attr("index");
	$('#modal-title').html(pics[index].title)
	$('#modal-img').html("<img src='"+pics[index].src+"' style='width:100%;'/>")
	$('#show-pic').modal("show");
})