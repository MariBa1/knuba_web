const buttons = document.getElementsByClassName("btn");
let previousButton = null;

function Coloring(exception) {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML == exception) {
      buttons[i].style.backgroundColor = "blue";
      previousButton = buttons[i];
    } else if (buttons[i].style.backgroundColor === "blue") {
      buttons[i].style.backgroundColor = "black";
    }
  }
}

document.addEventListener("keypress", (e) => {
  const key = String.fromCharCode(e.keyCode).toUpperCase();
  Coloring(key);
});
