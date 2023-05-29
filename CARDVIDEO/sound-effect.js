const menuLabel = document.querySelector(".show-menu");
const menuCheckbox = document.querySelector(".checkbox-menu");
const audioOpen = new Audio("soundeffect/click-effect-1.wav");
const audioClose = new Audio("soundeffect/click-effect-2.wav");

menuLabel.addEventListener('click', function() {
    if (menuCheckbox.checked) {
        audioClose.play();
    } else {
        audioOpen.play();
    }
});