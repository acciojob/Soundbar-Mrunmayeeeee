let currentAudio = null;

let btn = document.querySelectorAll(".btn");
let stop = document.querySelector(".stop");

btn.forEach(function(button) {

    button.addEventListener("click", function() {

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        let soundName = button.id;

        currentAudio = new Audio("./sounds/" + soundName + ".mp3");

        currentAudio.play();
    });

});

stop.addEventListener("click", function() {

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

});