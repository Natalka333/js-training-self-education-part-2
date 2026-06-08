const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const ulElem = document.querySelector('.gallery');
const markup = images
  .map(
    image =>
      `<li class='item'><img class='image' src=${image.url} alt=${image.alt} width='300px'/></li>`
  )
  .join('');

ulElem.insertAdjacentHTML('beforeend', markup);
// ******************************************************************
// const markup = images
//   .map(({ url, alt }) =>
//       `<li class='item'><img class='image' src=${url} alt=${alt} width='300px'/></li>`
//   )
//   .join('');
// ******************************************************************

// for (let i = 0; i < images.length; i++) {
//   const liElem = document.createElement('li');

//   const imgElem = document.createElement('img');
//   imgElem.setAttribute('src', `${images[i].url}`);
//   imgElem.setAttribute('alt', `${images[i].alt}`);
//   imgElem.style.width = '300px';

//   liElem.append(imgElem);
//   ulElem.append(liElem);
// }
