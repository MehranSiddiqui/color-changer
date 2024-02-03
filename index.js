// First Way
const button = document.getElementById("color-changer");
const body = document.getElementById("body");
let randomColor;
button.addEventListener("click", () => {
  randomColorChangerFunction();
  body.style.background = `#${randomColor}`;
});

//Second Way
const changeColor = () => {
  randomColorChangerFunction();
  body.style.background = `#${randomColor}`;
};
const randomColorChangerFunction = () => {
  randomColor = Math.floor(Math.random() * 16777215).toString(16);
};
document.onload = changeColor();
