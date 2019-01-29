const gradientCodeContainer = document.querySelector(
  ".gradient-code-container"
);
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
var page = document.querySelector("#page");

function generateRandomNumber() {
  return Math.floor(Math.random() * 256);
}

function generateRandomColor() {
  return `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
}

function generateDirection() {
  let value = Math.floor(Math.random() * 2);
  if (value === 0) {
    return "right";
  } else {
    return "left";
  }
}

function rgbToHex(rgbValue) {
  let rgbArray = rgbValue
    .split("(")[1]
    .split(")")[0]
    .split(",");
  let hexArray = rgbArray.map(function(number) {
    number = parseInt(number).toString(16);
    return number.length == 1 ? "0" + number : number;
  });
  return "#" + hexArray.join("");
}

function generateGradientRandomly() {
  let color1Value = generateRandomColor();
  let color2Value = generateRandomColor();
  color1.value = rgbToHex(color1Value);
  color2.value = rgbToHex(color2Value);
  return `linear-gradient(to ${generateDirection()}, ${color1Value}, ${color2Value})`;
}

function generateGradientFromInput() {
  return `linear-gradient(to ${generateDirection()}, ${color1.value}, ${
    color2.value
  })`;
}

function setGradientFromInput() {
  let output = generateGradientFromInput();
  page.style.background = output;
  gradientCodeContainer.textContent = output;
}

function setGradientFromCode() {
  let output = generateGradientRandomly();
  page.style.background = output;
  gradientCodeContainer.textContent = output;
}

function setGradientOnButtonClick(event) {
  if (!event.target.classList.contains("button-generator")) return;
  setGradientFromCode();
}

window.onload = setGradientFromCode;

document.addEventListener("input", setGradientFromInput);

document.addEventListener("click", setGradientOnButtonClick);
