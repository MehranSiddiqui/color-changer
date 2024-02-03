// First Way
const button = document.getElementById("color-changer");
const body = document.getElementById("body");
button.addEventListener("click", () => {
  console.log("Fired");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  body.style.background = `#${randomColor}`;
});

//Second Way
const changeColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.background = `#${randomColor}`;
};
document.onload=changeColor()
