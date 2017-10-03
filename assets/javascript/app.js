var animalArray = ["Alligator", "Chameleon","Gecko", "Gila Monster", "Monitor Lizard", "Skink", "Iguana", "Bearded Dragon", "Viper", "Python", "Boa", "Rattlesnake", "Adder"]
var selection = 0;

$(document).ready(function() {
	for(i = 0; i < animalArray.length; i++) {
		var choice = animalArray[i];
		var button = $('<button>');
		button.text(choice);
		button.attr('data-id', choice);
		$('#animalButtons').append(button);
	}
});


