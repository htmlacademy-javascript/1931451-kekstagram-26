//    Шаблон изображения случайного пользователя
// <template id="picture-template">
//   <a href="#" class="picture">
//     <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
//     <p class="picture__info">
//       <span class="picture__comments"></span>
//       <span class="picture__likes"></span>
//     </p>
//   </a>
// </template>

import { usersData } from './mock.js';

const picturesContainer = document.querySelector('.pictures.container');

const pictureTemplate = document
  .querySelector('#picture-template')
  .content.querySelector('.picture');

const pictureFragment = document.createDocumentFragment();

const renderSketch = (array) => {
  array.forEach((data) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const image = pictureElement.querySelector('.picture__img');

    image.id = `photo-${data.id}`;
    image.dataset.id = data.id;
    image.src = data.url;
    image.alt = data.description;

    pictureElement.querySelector('.picture__likes').textContent = data.likes;
    pictureElement.querySelector('.picture__comments').textContent = data.comments.length;

    pictureFragment.append(pictureElement);
  });

  picturesContainer.append(pictureFragment);
};

renderSketch(usersData);

export {};
