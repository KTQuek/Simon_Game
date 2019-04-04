
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = []


function playSound(colorChosen) {
  var audio = new Audio("sounds/" + colorChosen + ".mp3");
  audio.play();
}

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);

});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  var elementChosen = "#" + randomChosenColour;
  $(elementChosen).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}
