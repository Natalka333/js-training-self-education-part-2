function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanElem = document.querySelector('.color');
const btnElem = document.querySelector('.change-color');

btnElem.addEventListener('click', setOutput);

function setOutput() {
  const randomColor = getRandomHexColor();
  // меняем цвет боди
  document.body.style.backgroundColor = randomColor;

  // меняем цвет кнопки
  // btnElem.style.backgroundColor = randomColor;

  spanElem.textContent = randomColor;
}
