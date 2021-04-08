'use strict';

function guess() {
  let userNumber = prompt('Угадай число от 1 до 100');
  if (userNumber === null) {
    alert('Игра окончена');
    return;
  }

  let numberToGuess = 67;
  userNumber = +userNumber;
  if (isNaN(userNumber)) {
    alert('Введи число!');
    return guess();
  }

  if (userNumber < numberToGuess) {
    alert('Загаданное число больше');
    return guess();
  }

  if (userNumber > numberToGuess) {
    alert('Загаданное число меньше');
    return guess();
  }

  if (userNumber === numberToGuess) {
    alert('Поздравляю, Вы угадали!!!');
  }
}

guess();