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

// Call the checkMusicState function when the page loads
window.onload = function() {
    checkMusicState();
};


// Confetti animation for the Yes page
function confettiEffect() {
    var end = Date.now() + (15 * 1000);
    var colors = ['#bb0000', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
