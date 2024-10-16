// Toggle music play and pause
function toggleMusic() {
    var music = document.getElementById("background-music");
    if (music.paused) {
        music.play();
        localStorage.setItem("musicPlaying", "true");
    } else {
        music.pause();
        localStorage.setItem("musicPlaying", "false");
    }
}

// Check music state on load
function checkMusicState() {
    var music = document.getElementById("background-music");
    var musicPlaying = localStorage.getItem("musicPlaying");
    if (musicPlaying === "true") {
        music.play();
    } else {
        music.pause();
    }
}

window.onload = checkMusicState;
