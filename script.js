let boxinput = document.getElementById("mybox");
let Ubutton = document.getElementById("ubutton");
let Lbutton = document.getElementById("lbutton");
let Ibutton = document.getElementById("ibutton");
let para = document.getElementById("para");

Ubutton.addEventListener("click", function () {
  let input = boxinput.value;

  para.textContent = input.toUpperCase();
});

Lbutton.addEventListener("click", function () {
  let input = boxinput.value;

  para.textContent = input.toLowerCase();
});

Ibutton.addEventListener("click", function () {
  let input = boxinput.value;

  para.textContent = input.style.fontStyle = "italic";
});
