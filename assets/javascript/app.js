var animalArray = ["Alligator", "Chameleon","Gecko", "Gila Monster", "Monitor Lizard", "Skink", "Iguana", "Bearded Dragon", "Viper", "Python", "Boa", "Rattlesnake", "Adder"]
var selection = 0;


function showButtons() {
	for(i = 0; i < animalArray.length; i++) {
		var choice = animalArray[i];
		var button = $('<button>');
		button.text(choice);
		button.attr('data-id', choice);
		$('#animalButtons').append(button);
	}
};

// click button to call gify api and show images
$(document).on("click", "button", function() {
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=10&q=" + selection;
	selection = $(this).attr("data-id");
	console.log(selection);
	 $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;
          console.log(results);
          for (var i = 0; i < results.length; i++) {
          	var animalsDiv = $("<div>");
          	var p = $("<p>").text("Rating: " + results[i].rating);
          	var image = $("<img>");
          	image.attr("src", results[i].images.fixed_height.url);
          	animalsDiv.append(p);
          	animalsDiv.append(image);
          	console.log(animalsDiv);
          	$("#animals").prepend(animalsDiv);
          }
      });


});

$(document).ready(function() {
	showButtons();
	});


