const itemElem = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${itemElem.length}`);

itemElem.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const count = item.querySelector('ul').children.length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
});
