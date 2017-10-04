var animalArray = ["Alligator", "Chameleon","Gecko", "Gila Monster", "Monitor Lizard", "Skink", "Iguana", "Bearded Dragon", "Viper", "Python", "Boa", "Rattlesnake", "Adder"]
var selection = 0;
$(document).ready(function() {

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

// click button to call gify api and show images
	$("#animalButtons").on("click","button",function() {
		$("#animals").empty();
		selection = $(this).attr("data-id");
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=10&q=" + selection;
		console.log(selection);
		 $.ajax({
	          url: queryURL,
	          method: "GET"
	        })
	        .done(function(response) {
	          var results = response.data;
	          console.log(results);
	          for (var i = 0; i < results.length; i++) {
	          	var animalsDiv = $("<div class='animalsDiv'>");
	          	var p = $("<p>").text("Rating: " + results[i].rating);
	          	var image = $("<img>");
	          	image.attr("src", results[i].images.fixed_height.url);
	          	animalsDiv.append(p);
	          	animalsDiv.append(image);
	          	console.log(animalsDiv);
	          	$("#animals").append(animalsDiv);
	          }
	      });
	});

	$("#add-animal").on("click",function(event){
		event.preventDefault();
		var addAnimal = $("#animal-input").val().trim();
		animalArray.push(addAnimal);
		showButtons();
		});
showButtons();
});


