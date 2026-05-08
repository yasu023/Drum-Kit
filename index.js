var drums = document.querySelectorAll(".drum");
var audio = new Audio("");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", handdleClick); 
}

function handdleClick() {
  buttonAnimation(this.innerHTML);
  switch (this.innerHTML) {
    case "w":
      audio.src = "sounds/tom-1.mp3"; 
      audio.play();
      break;
    case "a":
      audio.src = "sounds/tom-2.mp3";
      audio.play();
      break;
    case "s":
      audio.src = "sounds/tom-3.mp3";
      audio.play();
      break;
    case "d":
      audio.src = "sounds/tom-4.mp3";
      audio.play();
      break;
    case "j":
      audio.src = "sounds/snare.mp3";
      audio.play();
      break;
    case "k":
      audio.src = "sounds/crash.mp3";
      audio.play();
      break;
    case "l":
      audio.src = "sounds/kick-bass.mp3";
      audio.play();
      break;
}
}

document.addEventListener("keydown", function(event) {
  handdleKeydown(event.key);
});

function handdleKeydown(key) {
  buttonAnimation(key);
  switch (event.key) {
    case "w":
      audio.src = "sounds/tom-1.mp3"; 
      audio.play();
      break;
    case "a":
      audio.src = "sounds/tom-2.mp3";
      audio.play();
      break;
    case "s":
      audio.src = "sounds/tom-3.mp3";
      audio.play();
      break;
    case "d":
      audio.src = "sounds/tom-4.mp3";
      audio.play();
      break;
    case "j":
      audio.src = "sounds/snare.mp3";
      audio.play();
      break;
    case "k":
      audio.src = "sounds/crash.mp3";
      audio.play();
      break;
    case "i":
      audio.src = "sounds/kick-bass.mp3";
      audio.play();
      break;
}
}

function buttonAnimation(currentKey) { 
 var activeButton =  document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}