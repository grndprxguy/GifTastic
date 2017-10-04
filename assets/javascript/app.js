var animalArray = ["Alligator", "Chameleon","Gecko", "Gila Monster", "Monitor Lizard", "Skink", "Iguana", "Bearded Dragon", "Viper", "Python", "Boa", "Rattlesnake", "Adder"]
var selection = 0;

$(document).ready(function() {
// display buttons from array
function showButtons() {
	$("#animalButtons").empty();
	for(i = 0; i < animalArray.length; i++) {
		var choice = animalArray[i];
		var button = $('<button>');
		button.text(choice);
		button.attr('data-id', choice);
		$('#animalButtons').append(button);
	}
};

// click button to call gify api and append images to div
	$("#animalButtons").on("click","button",function() {
		$("#animals").empty();
		selection = $(this).attr("data-id");
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=10&q=" + selection;
		 $.ajax({
	          url: queryURL,
	          method: "GET"
	        })
	        .done(function(response) {
	          var results = response.data;
	          for (var i = 0; i < results.length; i++) {
	          	var animalsDiv = $("<div class='animalsDiv'>");
	          	var p = $("<p>").text("Rating: " + results[i].rating);
	          	var image = $("<img>");
	          	image.attr("src", results[i].images.fixed_height.url);
	          	animalsDiv.append(p);
	          	animalsDiv.append(image);
	          	$("#animals").append(animalsDiv);
	          }
	      });
	});

// add a new animal to the array
	$("#add-animal").on("click",function(event){
		event.preventDefault();
		var addAnimal = $("#animal-input").val().trim();
		animalArray.push(addAnimal);
		$("#animal-input").val('');
		showButtons();
		});
	// call showButtons to modify html
showButtons();
});


