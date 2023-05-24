const images = document.querySelectorAll(".image-to-show");
const stopButton = document.getElementById("stopButton");
const resumeButton = document.getElementById("resumeButton");
let currentIndex = 0;
let intervalId = null;

function showNextImage() {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "block";
}

function startSlideshow() {
    intervalId = setInterval(showNextImage, 10000);
}

function stopSlideshow() {
    clearInterval(intervalId);
    intervalId = null;
}

function resumeSlideshow() {
    if (!intervalId) {
    startSlideshow();
}
}
startSlideshow();

stopButton.addEventListener("click", stopSlideshow);
resumeButton.addEventListener("click", resumeSlideshow);