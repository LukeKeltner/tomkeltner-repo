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

/*	var newDeck = $('<div class="card-deck">')
	for (var i=0; i<data.length; i++)
	{
		var newCard = $("<div class='card text-white bg-dark text-center' index='"+picNumber+"'>"
				  						+"<img class='card-img-top' src='"+data[picNumber].src+"' alt='Card image cap'/>"
				  						+"<div class='card-body' style='border-top:1px solid white'>"
				    						+"<h5 class='card-title'>"+data[picNumber].title+"</h5>"
				 						+"</div>"
									+"</div>");

		newDeck.append(newCard)
		picNumber = picNumber + 1;
	}

	$('#image-container').append(newDeck)*/

	for (var i=0; i<amountOfRows; i++)
	{
		var newRow = $("<div class='row'>")
		var newDeck = $('<div class="card-deck">')

		
		for (var j=0; j<4; j++)
		{
			if (picNumber < data.length)
			{
				var newCol = $("<div class='col-md-3'>")
				var newCard = $("<div class='card text-white bg-dark text-center' index='"+picNumber+"''>"
				  						+"<img class='card-img-top' src='"+data[picNumber].src+"'' alt='Card image cap'/>"
				  						+"<div class='card-body'>"
				    						+"<h5 class='card-title'>"+data[picNumber].title+"</h5>"
				 						+"</div>"
									+"</div>");

				newDeck.append(newCard)
				picNumber = picNumber + 1;
			}

			else
			{
				break;
			}
		}
		newRow.append(newDeck)
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

