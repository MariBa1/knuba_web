const input = document.getElementById("priceInput");

const result = document.getElementById("price_result");
const error = document.getElementById("ERROR");

input.addEventListener("focus", () => {
  input.style.borderColor = "blue";
});

input.addEventListener("focusout", () => {
  if (!document.querySelector("span")) {
    if (input.value < 0) {
      input.style.borderColor = "#FF0000";
      let spanContainer = document.createElement("span");
      let textContainer = document.createElement("p");

      textContainer.innerHTML = "Please enter correct price span";
      textContainer.style.color = "#FF0000";
      spanContainer.appendChild(textContainer);
      error.appendChild(spanContainer);
    } else {
      let spanContainer = document.createElement("span");
      let textContainer = document.createElement("p");
      let closeButton = document.createElement("p");

      closeButton.id = "close-button";
      closeButton.innerHTML = "✕";

      textContainer.innerHTML = `Текущая цена: ${input.value}`;
      spanContainer.appendChild(textContainer);
      spanContainer.appendChild(closeButton);
      result.appendChild(spanContainer);

      closeButton.addEventListener("click", () => {
        document.querySelector("span").remove();
        input.value = "";
      });
    }
  }
});
