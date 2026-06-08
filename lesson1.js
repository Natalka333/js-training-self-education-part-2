// Рандомная картинка`https://source.unsplash.com/1280x720/?random=${1}&cat`;

// *********************  Пошук елементів   ******************************
// element.querySelector(selector); -якщо необхідно знайти тільки один, найчастіше унікальний елемент
// const item = document.querySelector('.list-item');

// element.querySelectorAll(selector); -отримати масив посилань на елементи з однаковим селектором
// const listItems = document.querySelectorAll('.list-item');

// const liElem = document.querySelector('li');

// const elem1 = liElem.nextElementSibling;
// const elem2 = liElem.previousElementSibling;
// const parentElem = liElem.parentElement;
// const parentElem = liElem.parentElement.parentElement;
// const firstChildElem = liElem.firstElementChild;

// const ulElem = document.querySelector('ul');

// const firstElem = ulElem.firstElementChild;
// const lastElem = ulElem.lastElementChild;

// const ulElem = document.querySelector('ul');

// const children = ulElem.children;
// const secondElem = ulElem.children[1];

// *********************  Доступ до властивостей  ******************************

//<a class="link" href="https://goit.global">GoIT</a>;

// const link = document.querySelector('.link');
// console.log(link.href); // "https://goit.global"

// Значення атрибутів можна змінювати, перевизначивши їм нове значення прямо з JavaScript коду

// const link = document.querySelector('.link');
// console.log(link.href); // "https://goit.global"
// link.href = 'https://neo.goit.global';
// console.log(link.href); // "https://neo.goit.global"

// *********************  Властивість textContent  **************************
// Властивість textContent зберігає текстовий вміст елемента без HTML-тегів
// Властивість textContent повертає весь текстовий контент усередині елементів (власних і вкладених елементів

/* <p class="text">Username: <span class=”sub-text”>Mango</span></p> */

// const el = document.querySelector(".text")
// const nested = document.querySelector(".sub-text")
// console.log(el.textContent); // "Username: Mango"
// console.log(nested.textContent); // "Mango"

// const el = document.querySelector('.text');
// console.log(el.textContent); // "Username: Mango"
// el.textContent = 'Username: Poly';

// *****************************************************************
// *********************  Властивість classList  *****************
// ****************************************************************
// Для того чтобы с JavaScript кода прочитать, добавить, удалить или проверить наличие CSS-класса у элемента, в свойстве classListсохраняется объект с методами для работы с CSS-классами элемента.Свойство classList— это специальный тип объекта, похожий на массив. Учти, что он похож!
// Он хранит в себе весь список классов DOM-элемента, свойство length и свойство value.

// свойство value содержит точное значение атрибута class
// свойство length — количество классов у элемента

/* <a class="link is-active" href="https://goit.global">
  {' '}
  GoIT
</a>; */

// const link = document.querySelector( ".link" );
// console. log ( link.classList );
// [ "link" , "is-active" , length : 2, value: "link is-active" ]

// *******  МетодclassList.contains(className)  ************

// const hasActiveClass = link.classList.contains( "is-active" ) ; // true
// const hasActiveClass = link.classList.contains( "title" ) ; // false

// *******  МетодclassList.add(className) ************

// link.classList.add("special");
// console.log(link.classList);
// ["link", "is-active", "special", length: 3, value: "link is-active special"]

// *******  Метод classList.remove(className) ************
// link.classList.remove("is-active");
// console.log(link.classList);
// ["link", "special", length: 2, value: "link special"]

// *******  Метод classList.toggle(className) ************
// якщо клас className відсутній, то додає його в кінець списку класів
// і навпаки, якщо клас className присутній — видаляє його

// link.classList.toggle("is-active");
// console.log(link.classList);
// ["link", "special", "is-active", length: 3, value: "link special is-active"]

// *******  Метод classList.replace(oldClassName, newClassName) ************
// Метод очікує 2 аргументи рядка (перший — стара назва класу, другий — нова назва класу) та замінює існуючий клас oldClassName на вказаний newClassName

// link.classList.replace("special", "regular");
// console.log(link.classList);
// ["link", "regular", "is-active", length: 3, value: "link regular is-active"]

// *****************************************************************
// *********************  Властивість style *****************
// ****************************************************************
// Властивість style використовується для читання та зміни вбудованих стилів з DOM-елементів. Вона повертає об'єкт, який містить список лише всіх вбудованих властивостей елемента, а не увесь CSS.

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object

// const liElem = document.querySelectorAll('li');
// for (let i = 0; i < liElem.length; i += 1) {
//     liElem[i].style.backgroundColor = 'tomato';
//     liElem[i].style.width = `${i * 10}px`;
// }

// *****************************************************************
// *********************  Доступ до атрибутів *****************
// ****************************************************************
{
  /* <img
  class="image"
  src="https://picsum.photos/id/15/320/240"
  alt="Rocks and waterfall"
  width="300"
/>; */
}
// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// *********************  Метод element.hasAttribute(nameAttribute) *****************
//  Метод element.hasAttribute(nameAttribute) приймає ім’я атрибута та перевіряє його наявність на елементі.

// const image = document.querySelector(".image");
// console.log(image.hasAttribute("src")); // true
// console.log(image.hasAttribute("href")); // false

// *********************  Метод element.getAttribute(nameAttribute) *****************
// Метод отримує один аргумент — рядок nameAttribute з іменем атрибута, і повертає значення цього атрибута для вказаного HTML-елемента element. Якщо атрибут не знайдено, метод повертає null.

// console.log(image.getAttribute("alt")); // "Rocks and waterfall"

// *********************  Метод element.setAttribute(nameAttribute, value) *****************
// Метод приймає два аргументи: рядок nameAttribute з іменем атрибута, який потрібно встановити або змінити, та value зі значенням, яке цьому атрибуту треба присвоїти.
// image.setAttribute("alt", "Amazing nature");
// console.log(image.getAttribute("alt")); // Amazing nature

// *********************  Метод element.removeAttribute(nameAttribute) *****************
// Метод приймає один аргумент — рядок nameAttribute з іменем атрибута, який потрібно видалити зі вказаного HTML-елемента element — та видаляє його.
// image.removeAttribute("alt");
// console.log(image.hasAttribute("alt")); // false

// *****************************************************************
// *********************  Власні атрибути *****************
// ****************************************************************
// Власні атрибути дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript.

{
  /* <button type="button" data-action="save">Save text</button>
<button type="button" data-action="close">Close editor</button> */
}

// ************ Отримання значень***************

// Для отримання значення data-атрибута використовується властивість dataset, після якої через крапку пишеться ім'я атрибута без data-. Тобто data- відкидається, а інша частина імені записується як ім'я властивості об'єкта.

// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"

// ************ Зміна значень***************
// треба отримати доступ до DOM-елемента, а потім змінити/задати значення властивості в об'єкті dataset.

// Змінюємо значення data-action для кнопки saveBtn
// saveBtn.dataset.action = "update";

// // Додаємо новий data-атрибут data-role
// saveBtn.dataset.role = "admin";

// // Перевіримо нові значення
// console.log(saveBtn.dataset.action); // "update"
// console.log(saveBtn.dataset.role); // "admin"

// *****************************************************************
// *********************  Створення та видалення елементів *****************
// ****************************************************************

// *********************  Створення елементів*****************
// document.createElement(tagName);
// створює елемент з ім'ям tagName і повертає посилання на його об’єкт як результат свого виконання.
// tagName — це рядок, що вказує тип елемента, який створюється.
// Елемент створюється в пам'яті, у DOM його ще немає.

// const heading = document.createElement('h1');

// Після створення елемента heading отримуємо посилання на його об’єкт у пам'яті. З цього моменту можна звертатися до властивостей цього об’єкта і змінювати їх ще до того, як вставимо цей елемент у DOM.

// const heading = document.createElement("h1");
// heading.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading); // <h1 class="title">This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://picsum.photos/id/11/320/240";
// image.alt = "Nature";
// console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />

// *********************  Додавання елементів *****************

// Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM-дереві. Припустимо, що додаємо до певного елемента elem, для цього існують такі методи.

// elem.append(el1, el2, ...) — додає один або декілька елементів
// після всіх дітей елемента elem.

// elem.prepend(el1, el2, ...) — додає один або декілька елементів
// перед усіма дітьми елемента elem.

//   <h1>Usernames</h1>
//   <ul class="usernames">
//     <li>Mango</li>
//   </ul>

// const list = document.querySelector('.usernames');

// // Adds an item to the end of the list
// const lastItem = document.createElement('li');
// lastItem.textContent = 'Poly';
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement('li');
// firstItem.textContent = 'Ajax';
// list.prepend(firstItem);

// *********************  Видалення елементів *****************
// Для того щоб видалити елемент, використовується метод element.remove().
{
  /* <p class="text">Random text content</p>; */
}
// const text = document.querySelector('.text');
// text.remove();

// *****************************************************************
// *********************  Властивість innerHTML *****************
//           ластивість innerHTML повертає рядок (string).
// // ****************************************************************
// Існує ще один спосіб створити DOM-елементи і помістити їх у DOM-дерево.

// *********************  Читання *****************
{
  /* <article class="article">
  <h2 class="title">Article title</h2>
  <p class="text">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa
    quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem
    minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo
    perspiciatis, consectetur non.
  </p>
  <a class="link" href="">
    Read more
  </a>
</article>; */
}
// const article = document.querySelector('.article');
// console.log(article.innerHTML);

// const title = document.querySelector('.article .title');
// console.log(title.innerHTML);

// const text = document.querySelector('.article .text');
// console.log(text.innerHTML);

// const link = document.querySelector('.article .link');
// console.log(link.innerHTML);

// *********************  Зміна *****************

// const title = document.querySelector('.article .title');
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// *********************   *****************
// Однотипна (шаблонна) розмітка створюється із масиву даних.
// Прийом полягає в перебиранні цього масиву та створенні одного рядка з HTML-тегами, який потім записуємо в innerHTML елемента. Якщо ти будеш це робити за допомогою методу map(), не забудь, що він повертає масив. Отже, перед тим як додавати розмітку в DOM, цей масив треба привести до рядка за допомогою методу join()

{
  /* <section>
  <h2>Popular technologies</h2>
  <ul class="list"></ul>
</section>; */
}

// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const markup = technologies
//   .map(technology => `<li class="list-item">${technology}</li>`)
//   .join('');

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// ***********************************************
// Використовуй властивість element.innerHTML для додавання тільки у разі,
// — коли елемент element порожній або
// — якщо потрібно повністю замінити вміст element
// ***********************************************

// *********************  Метод insertAdjacentHTML() *****************
// Метод insertAdjacentHTML() — це сучасний метод для додавання рядка з HTML-тегами перед, після або всередину елемента.

// element.insertAdjacentHTML(position, string);
// Аргумент position — це рядок, який визначає позицію щодо елемента element.

// "beforebegin" — перед element
// "afterbegin" — всередині element, перед усіма дітьми
// "beforeend" — всередині element, після усіх дітей
// "afterend" — після element

// *****************************************************************
// *********************  Події *****************
// ***********************   Метод addEventListener()    ***********************************

// element.addEventListener(event, handler, options);
// Слухач події — це механізм, який "слухає" або "очікує" на виникнення певної події. Метод addEventListener() додає слухача події на елемент.

// event — рядок, що містить ім'я події, наприклад, "click"
// handler — колбек-функція, яка буде викликана під час настання події
// options — необов'язковий об'єкт параметрів із розширеними налаштуваннями
{
  /* <button class="my-button">Next</button>; */
}
// ****1***
// const button = document.querySelector('.my-button');
// button.addEventListener('click', () => {
//   console.log('The button was pressed and now the next image will appear');
// });

// ****2***
// const button = document.querySelector('.my-button');
// const handleClick = () => {
//   console.log('The button was pressed and now the next image will appear');
// };

// button.addEventListener('click', handleClick);

// *********************  Метод removeEventListener() *****************

// Метод removeEventListener() видаляє слухача події з елемента.

// Аргументи аналогічні методу addEventListener():
// element.removeEventListener(event, handler, options);

// const addListenerBtn = document.querySelector('.js-add');
// const removeListenerBtn = document.querySelector('.js-remove');
// const btn = document.querySelector('.target-btn');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// addListenerBtn.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
//   console.log('click event listener was added to btn');
// });

// removeListenerBtn.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
//   console.log('click event listener was removed from btn');
// });

// *********************  Об'єкт події *****************
// Параметр event — це і є об'єкт події, який автоматично передається першим аргументом під час виклику колбек-функції.

// event.type — тип події.
// event.currentTarget — елемент, на якому виконується обробник події.

// const button = document.querySelector('.btn');

// const handleClick = event => {
//   console.log('event: ', event);
//   console.log('event type: ', event.type);
//   console.log('currentTarget: ', event.currentTarget);
// };

// button.addEventListener('click', handleClick);

// *********************  Події клавіатури *****************
// keydown — подія, що відбувається при натисканні клавіші
// keyup — подія, що відбувається, коли клавішу відпустили
// На відміну від інших подій, події клавіатури обробляються на документі, а не на конкретному елементі.

// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup: ', event);
// });

// *****************************************************************
// *********************  Властивості key і code*****************
// *****************************************************************
// Властивість об’єкта події key повертає символ, згенерований натисканням клавіші на клавіатурі. Ця властивість враховує:

// стан клавіш-модифікаторів, наприклад Shift
// поточну мову

// Властивість об’єкта події code повертає код фізичної клавіші на клавіатурі й не залежить від мови та стану клавіш-модифікаторів.

// document.addEventListener('keydown', event => {
// console.log('key: ', event.key);
//   //   key: h;
// console.log('code: ', event.code);
//   \\code: KeyH;
// });

// *****************************************************************
// *********************  Події елементів форм   *****************
// *****************************************************************

// *********************  Подія submit  *****************
// при кліку на кнопку з атрибутом type="submit"
// Або
// при натисканні клавіші Enter під час перебування в будь-якому її текстовому полі форми
// Подія submit відбувається безпосередньо на формі (тег form), тому обробник подій слід встановлювати саме на ній.

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   // ...
// });

// клік на посиланні ініціює перехід на нову адресу, зазначену в href, а відправлення форми перезавантажує сторінку.
// Найчастіше ця поведінка небажана і її необхідно скасувати. Для скасування дії браузера за замовчуванням в об'єкта події є стандартний метод preventDefault().

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
// });

{
  /* <form class="form" autocomplete="off">
  <input type="text" name="login" placeholder="Login">
  <input type="password" name="password" placeholder="Password">
  <button class="btn" type="submit">Register</button>
</form> */
}

// const registerForm = document.querySelector('.form');

// registerForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;

//   if (login === '' || password === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }
// Для отримання доступу до даних, введених користувачем у формі під час обробки події submit, використовується об'єкт події event і його властивість target. Значення полів можна отримати за їх іменами (атрибутами name).

// event.target.elements.login.value і event.target.elements.password.value

// *********************  Подія change  *****************

// Подія change відбувається після зміни елемента форми.
{
  /* <p>
  Selected option text: <span class="text-output">none</span>
<p>
<p>
  Selected option value: <span class="value-output">none</span>
<p>

  <select class="pizza-select">
    <option value="four_meats">Four Meats</option>
    <option value="royal_cheese">Royal Cheese</option>
    <option value="vegetarian">Vegetarian</option>
    <option value="smoked_salmon">Smoked Salmon</option>
  </select> */
}
// const select = document.querySelector('.pizza-select');
// const textOutput = document.querySelector('.text-output');
// const valueOutput = document.querySelector('.value-output');

// select.addEventListener('change', setOutput);

// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// ********************* Подія input *****************
// Подія input відбувається тільки на текстових полях і textarea.

// Вона створюється щоразу при зміні значення елемента, не чекаючи втрати фокусу. На практиці input — це найголовніша подія для роботи з текстовими полями форми.
{
  /* <input type="text" class="text-input" placeholder="placeholder/>
<p>Text field value: <span class="output"></span></p> */
}
// const textInput = document.querySelector('.text-input');
// const output = document.querySelector('.output');

// console.log(textInput.value)
// textInput.setAttribute('placeholder', 'PLASEHOLDER');

// textInput.addEventListener('input', event => {
//   output.textContent = event.currentTarget.value;
// });

// Подія input:

// відбувається при кожній зміні значення (при введенні або видаленні)
// не залежить від втрати фокусу

// Подія change:

// відбувається після втрати фокусу за умови, що відбулася зміна значення в елементі

// ********************* Подія focus і blur *****************
// Елемент отримує фокус під час кліку миші або переходу клавішею Tab.

// подія focus відбувається під час фокусування на елементі

// подія blur відбувається при втраті фокусу, наприклад, користувач клікає в іншому місці екрана
// Активувати або скасувати фокус можна програмно. Для цього треба викликати в коді для елемента однойменні методи focus() і blur().
{
  /* <button type="button" data-action="set">Set focus to input</button>
<button type="button" data-action="remove">Remove focus from input</button>
<br><br>
<input type="text" class="text-input" /> */
}
// const textInput = document.querySelector('.text-input');
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener('click', () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener('click', () => {
//   textInput.blur();
// });

// textInput.addEventListener('focus', () => {
//   textInput.value = 'This input has focus';
// });

// textInput.addEventListener('blur', () => {
//   textInput.value = '';
// });
// Фокус може бути тільки на одному елементі сторінки за одиницю часу. Поточний елемент, на якому знаходиться фокус, доступний як document.activeElement.
