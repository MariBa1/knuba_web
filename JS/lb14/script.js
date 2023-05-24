const tabs = $(".tabs-title")
const tabs_content = $(".tabs-content")
const content_text = $(".tabs-content > li");

function Active(skipIndex) {
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].className == "tabs-title active" && i != skipIndex) {
        tabs[i].className = "tabs-title";
        return;
    }
  }
}

function Content() {
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].className == "tabs-title active") {
        console.log(true);
        tabs_content[0].innerHTML = content_text[i].innerHTML;
    }
  }
}

function addEvents() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
        Active(i);
        tabs[i].classList.add("active");
        Content();
    });
  }
}

addEvents();
Content();
