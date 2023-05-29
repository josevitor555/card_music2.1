const playButton = document.getElementById('play-pause');
let Playing = false;

playButton.addEventListener("click", () => {
    if (Playing) {
        playButton.classList.remove("fa-pause");
        playButton.classList.add("fa-play");
        Playing = false;
    } else {
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");
        Playing = true;
    }
});