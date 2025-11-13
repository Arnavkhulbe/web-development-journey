var userClicked = [];
var randcolor = [];
var level = 0;
var started = false;

$(document).keypress(function() {
  if (!started) {
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  userClicked.push(this.id);
  var audio2 = new Audio("./sounds/" + this.id + ".mp3");
  audio2.play();
  check(userClicked.length - 1);
});

function check(count) {
  if (userClicked[count] === randcolor[count]) {
    console.log("✅ Correct so far");

    if (userClicked.length === randcolor.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  } else {
    console.log("❌ Wrong click");
    var wrong = new Audio("./sounds/wrong.mp3");
    wrong.play();

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function nextSequence() {
  userClicked = [];
  level++;
  $("h1").text("Level " + level);

  var colors = ["red", "blue", "green", "yellow"];
  var rand = Math.floor(Math.random() * 4);
  var rand1 = colors[rand];
  randcolor.push(rand1);

  $("." + rand1).fadeOut(100).fadeIn(100);
  var audio = new Audio("./sounds/" + rand1 + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  randcolor = [];
  started = false;
}

    

