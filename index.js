//alert("Working!");
let button = document.querySelectorAll(".drum");
let numberOfButton = button.length;

//Deticting sound for button click
for (let i = 0; i < numberOfButton; i++) {
    button[i].addEventListener("click", function () {
        let buttonInnerHtml = this.innerHTML;
        //console.log(this.innerHTML); // don't working on arrow function
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });
}

//Detecting sound for keypress
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

//make sound
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(key);
    }
}

//play audio
// let audio = new Audio("sounds/tom-1.mp3");
//         audio.play();

//Animating button on key pressed or clicked
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);
}