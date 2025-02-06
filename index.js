// $(".btn").on("click", function() {
//     $(".btn").addClass("pressed")
//     setTimeout(function() {
//         $(".btn").removeClass("pressed")
//     }, 100)
// })

let btnLength = document.querySelectorAll(".btn").length;
var i = 0;
var buttonColors = ["red", "blue", "green", "yellow"];
var nextRound = [];


for (; i < btnLength; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function(event) {
        var buttonColors = this.classList[1]
        if (nextRound.length == 0 ) {
            makeSound(buttonColors)
            $("#" + buttonColors).fadeIn(100).fadeOut(100).fadeIn(100);
            setTimeout(nextSequence, 300)
        } else {
            if (nextRound[0] == buttonColors) {
                setTimeout(nextSequence, 300);
                nextRound.pop();
            } else {
                gameOver();
                alert("Restart the game ?")
                $("#level-title").text("Restart the game")
            }
        }

    })
}

function makeSound(key) {
    switch(key) {
        case "blue":
            new playAudio("blue");
            break;
        case "green":
            new playAudio("green");
        break;
        case "red":
            new playAudio("red");
        break;
        case "yellow":
            new playAudio("yellow");
        break;
        default:
            new playAudio("wrong");
    }
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3);
    var buttonColor = buttonColors[randomNumber];
    nextRound.push(buttonColor);
    makeSound(buttonColor)
    $("#" + buttonColor).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playWrong() {
    playAudio("wrong");
}

function gameOver() {
    $("#level-title").text("Game Over")
    playWrong();
    nextRound.pop();
}

function playAudio(audioName) {
    var audio = new Audio("sounds/" + audioName + ".mp3");
    audio.play();
}
