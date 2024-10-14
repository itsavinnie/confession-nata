document.getElementById("yesButton").addEventListener("click", function() {
    alert("Yay! I knew you'd say yes! 🥰");
    document.getElementById("catGif").src = "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif";
});

document.getElementById("noButton").addEventListener("click", function() {
    alert("Oh no... 😢");
    document.getElementById("catGif").src = "https://media.giphy.com/media/6uMqzcbWRhoT6/giphy.gif";
});
