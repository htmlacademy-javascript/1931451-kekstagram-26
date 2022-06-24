import { usersData } from './mock.js';
import { isEscapeKey, showAlert } from './utils.js';

const picturesContainer = document.querySelector('.pictures.container');
const bigPicture = document.querySelector('.big-picture');
const closeBigPictureButton = bigPicture.querySelector('#picture-cancel');
const commentsLoaderButton = bigPicture.querySelector('.social__comments-loader');


const getMainPicturesContent = (data) => {
  const imgContainer = bigPicture.querySelector('.big-picture__img');
  const likesCountContainer = bigPicture.querySelector('.likes-count');
  const captionContainer = bigPicture.querySelector('.social__caption');

  imgContainer.querySelector('img').src = data.url;
  likesCountContainer.textContent = data.likes;
  captionContainer.textContent = data.description;
};

const getCommentsCount = (comments) => {
  const commentsLength = comments.length;
  const commentsCountContainer = bigPicture.querySelector('.social__comment-count');
  let commentsCountFrom = 5;

  if (commentsCountFrom > commentsLength) {
    commentsCountFrom = commentsLength;
  }

  if (!commentsCountFrom) {
    commentsCountContainer.textContent = 'К данному посту нет комментариев';
    return commentsCountContainer;
  }

  commentsCountContainer.textContent = `${commentsLength} из ${commentsLength} комментариев`;

  //commentsCountContainer.classList.add('hidden');
};


const getComments = (array) => {
  const commentsList = bigPicture.querySelector('.social__comments');
  const commentTemplate = commentsList.querySelector('.social__comment');
  const commentsFragment = document.createDocumentFragment();
  commentsList.innerHTML = '';

  array.forEach((data) => {
    const comment = commentTemplate.cloneNode(true);
    const avatar = comment.querySelector('img');

    avatar.src = data.avatar;
    avatar.alt = data.name;
    comment.querySelector('p').textContent = data.message;

    commentsFragment.append(comment);
  });

  commentsList.append(commentsFragment);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const EcsKeydownCloseBigPictureHandler = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

const closeBigPictureHandler = () => {
  closeBigPicture();

  document.removeEventListener('keydown', EcsKeydownCloseBigPictureHandler);
};

const openBigPicture = (data) => {
  const commentsArray = data.comments;

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  getMainPicturesContent(data);
  getCommentsCount(commentsArray);
  getComments(commentsArray);

  commentsLoaderButton.classList.add('hidden');

  document.addEventListener('keydown', EcsKeydownCloseBigPictureHandler);
};

const checkUserId = (id) => usersData.findIndex((data) => data.id === id);

const pictureClickHandler = (evt) => {
  evt.preventDefault();

  if (evt.target.nodeName === 'IMG') {
    const index = checkUserId(parseInt(evt.target.dataset.id, 10));

    if (index !== -1) {
      openBigPicture(usersData[index]);
    } else {
      showAlert('Невозможно открыть изображение!');
    }
  }
};

closeBigPictureButton.addEventListener('click', closeBigPictureHandler);
picturesContainer.addEventListener('click', pictureClickHandler);


export {};
