// Toggle music play and pause
function toggleMusic() {
    var music = document.getElementById("background-music");
    if (music.paused) {
        music.play();
        localStorage.setItem("musicPlaying", "true"); // Save play state
    } else {
        music.pause();
        localStorage.setItem("musicPlaying", "false"); // Save pause state
    }
}

// Function to check the music state on page load
function checkMusicState() {
    var music = document.getElementById("background-music");
    var musicPlaying = localStorage.getItem("musicPlaying");
    if (musicPlaying === "true") {
        music.play();
    } else {
        music.pause();
    }
}

// Page Transition
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location = this.href;
        }, 500);
    });
});

// Check music state when the page loads
window.onload = function() {
    checkMusicState();
};
