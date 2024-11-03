const input = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");

let size = 30;

btnCreate.addEventListener("click", createMarkup);
btnDestroy.addEventListener("click", handleDestroy);

function createMarkup() {
  if (Number(input.value) < 0 || Number(input.value) > 100) {
    alert(
      `Error! Number ${input.value} is invalid. Please, enter a number from 0 to 100`
    );
    input.value = "";
    return;
  }
  createBoxes(+input.value);
}

function createBoxes(amount) {
  input.value = "";
  const arr = [];
  for (let i = 0; i < amount; i++) {
    const myBox = document.createElement("div");
    myBox.style.height = `${size}px`;
    myBox.style.width = `${size}px`;
    myBox.style.backgroundColor = getRandomHexColor();
    arr.push(myBox);
    size += 10;
  }
  box.append(...arr);
}

function handleDestroy() {
  box.innerHTML = "";
  size = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
