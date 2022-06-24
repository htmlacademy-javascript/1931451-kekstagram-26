const DEFAULT_ALERT_TIME = 5000;


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


//Проверяем нажатие на клавишу ESC
const isEscapeKey = (evt) => evt.key === 'Escape';


//Рисуем сообщение об ошибке
const showAlert = (message, color = 'red', time = DEFAULT_ALERT_TIME) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '1000';
  alertContainer.style.position = 'fixed';
  alertContainer.style.top = 0;
  alertContainer.style.left = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px';
  alertContainer.style.color = '#fff';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = color;
  alertContainer.style.lineHeight = '130%';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, time);
};


export { checkLengthString, getRandomNumber, getRandomArrayElement, isEscapeKey, showAlert };
