'use strict';

let numberToGuess = Math.floor(Math.random() * 100) + 1;

function guess() {
  let userNumber = prompt('Угадай число от 1 до 100');
  if (userNumber === null) {
    alert('Игра окончена');
    return;
  }


  userNumber = +userNumber;
  if (isNaN(userNumber) || userNumber !== Math.round(userNumber)) {
    alert('Введи целое число!');
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