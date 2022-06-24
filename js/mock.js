import { getRandomNumber, getRandomArrayElement } from './utils.js';

const MAX_DATA_LENGTH = 25;

const PhotoDescriptions = [
  'Never seen a selfie of yours that I don\'t like.',
  'You are the coolest.',
  'Watch out, world',
  'Besides chocolate, you are my favourite thing',
  'Very gorgeous; I am falling in love with this snap of you.',
  'Your smile is wow',
  'Dashing look',
  'Hey, you are breaking the internet',
];

const PhotoLikes = {
  MIN: 15,
  MAX: 200,
};

const Comments = {
  ID_FROM: 1,
  ID_TO: 1000,
  AUTHORS: ['Monica', 'Phoebe', 'Ross', 'Chandler', 'Rachel', 'Joey'],
  COMMENTS: [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ],
  AVATAR_FROM: 1,
  AVATAR_TO: 6,
  get RANDOM_AVATAR() {
    return getRandomNumber(this.AVATAR_FROM, this.AVATAR_TO);
  },
  get RANDOM_ID() {
    return getRandomNumber(this.ID_FROM, this.ID_TO);
  },
};

const CommentsLength = {
  MIN: 0,
  MAX: 10,
};

const generateComment = () => ({
  id: Comments.RANDOM_ID,
  avatar: `img/avatar-${Comments.RANDOM_AVATAR}.svg`,
  message: getRandomArrayElement(Comments.COMMENTS),
  name: getRandomArrayElement(Comments.AUTHORS),
});

let photoId = 0;

const generatePhotoDesc = () => ({
  id: ++photoId,
  url: `photos/${photoId}.jpg`,
  description: getRandomArrayElement(PhotoDescriptions),
  likes: getRandomNumber(PhotoLikes.MIN, PhotoLikes.MAX),
  comments: Array.from(
    { length: getRandomNumber(CommentsLength.MIN, CommentsLength.MAX) },
    generateComment
  ),
});

const usersData = Array.from({ length: MAX_DATA_LENGTH }, generatePhotoDesc);


export { usersData };
