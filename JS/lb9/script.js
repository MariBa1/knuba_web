const tabs = document.querySelectorAll(".tabs-title");
const tabs_content = document.getElementsByClassName("tabs-content");
const text = document.querySelectorAll(".tabs-content > li");

function removeActive(skipIndex) {
  tabs.forEach((tab, i) => {
    if (tab.className == "tabs-title active" && i !== skipIndex) {
      tab.className = "tabs-title";
      return;
    }
  });
}

function setContent() {
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].classList.contains("active")) {
      console.log(true);
      tabs_content[0].innerHTML = text[i].innerHTML;
    }
  }
}

function addEvents() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
      removeActive(i);
      tabs[i].classList.add("active");
      setContent();
    });
  }
}

addEvents();
setContent();
