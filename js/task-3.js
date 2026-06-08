const inputElem = document.querySelector('#name-input');
const spanElem = document.querySelector('#name-output');

inputElem.addEventListener('input', event => {
  const name = event.currentTarget.value.trim();

  spanElem.textContent = name || 'Anonymous';

  // ***************** ИЛИ ************
  //   if (name === '') {
  //     spanElem.textContent = 'Anonymous';
  //   } else {
  //     spanElem.textContent = name;
  //   }
});
