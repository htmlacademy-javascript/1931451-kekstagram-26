//Функция для проверки максимальной длины строки
const checkLengthString = (string, maxLength) => string.length <= maxLength;


//Получаем случайное целое число из выбранного диапазона
const getRandomNumber = (min, max) => {

  if (min < 0 || max < 0) {
    return -1;
  }

  // min = Math.ceil(min);
  // max = Math.floor(max);

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};


//Получаем случайный элемент из массива
const getRandomArrayElement = (element) => element[getRandomNumber(0, element.length - 1)];


export { checkLengthString, getRandomNumber, getRandomArrayElement };
