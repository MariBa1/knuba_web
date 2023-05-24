const password = document.getElementById("password");
const password_confirm = document.getElementById("password-confirm");

const show_event = document.getElementById("show-event");
const hide_event = document.getElementById("hide-event");

const confirm_btn = document.getElementById("confirm-btn");

let show = false;
let hide = true;

show_event.addEventListener("click", () => {
  if (show == true) {
    password.type = "password";
    show = false;
    show_event.className = "fas fa-eye icon-password";
  } else{
    password.type = "text";
    show = true;
    show_event.className = "fas fa-eye-slash icon-password";
  }
  });

hide_event.addEventListener("click", () => {
  if (hide == false) {
    password_confirm.type = "password";
    hide = true;
    hide_event.className = "fas fa-eye icon-password";
  } else {
    password_confirm.type = "text";
    hide = false;
    hide_event.className = "fas fa-eye-slash icon-password";
  }
});

confirm_btn.addEventListener("click", () => {
    if (password_confirm.value == password.value) {
        alert('You are welcome!')
    } else {
        alert("You need to enter the same values!!!")
    }
});
