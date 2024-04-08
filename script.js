'use strict';
//console.log(document.querySelector('.message').textContent);
/*document.querySelector('.message').textContent = 'Correct number!';
document.querySelector('.score').textContent = '15';
document.querySelector('.highscore').textContent = '20';
document.querySelector('.number').textContent = '18';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

/*
let score = 20;
let highScore = 0;

//Tổng hợp toàn bộ chức năng của trò chơi
const gameResult = function () {
  const serectNumber = Math.trunc(Math.random() * 20) + 1; // Tạo số ngẫu nhiên bằng Math.random() và làm tròn bằng Math.trunc()
  const guess = Number(document.querySelector('.guess').value); // TRuy vấn và gán thuộc tính 'value' --> giá trị nhập từ bàn phím gọi từ DOM
  console.log((document.querySelector('.score').textContent = score)); //Truy vấn và gán thuộc tính 'textContent' với toán tử gán giá trị

  //Khi người chơi không nhập gì cả
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    document.querySelector('.number').textContent = '?';
  }
  //Người chơi nhập sai và số lớn hơn kết quả
  else if (guess > serectNumber) {
    //Điểm sẽ giảm dần khi giá trị vẫn còn lớn hơn 1
    if (score > 1) {
      document.querySelector('.message').textContent = 'High Number!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    //Điểm rơi vào giá trị 0
    else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < serectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Low Number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //Người chơi đoán đúng kết quả
  else if (guess === serectNumber) {
    document.querySelector('.number').textContent = serectNumber;
    document.querySelector('.message').textContent = 'Correct number!';
    highScore += score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
};

document.querySelector('.check').addEventListener('click', gameResult); // Truy vấn và khởi động sự kiện bằng một đối số (code viết sẵn từ JS)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  highScore = 0;
  document.querySelector('.message').textContent = 'Select number...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});*/

//=================================Clean Code==================================
//Tái cấu trúc lại mã (tránh trùng lặp code và dễ nhìn hơn - bảo trì ổn định hơn mà không thay đổi cách hoạt động của code)
let score = 20;
let highScore = 0;

//Có thể tạo hàm cho từng chức năng cụ thể của game
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Tổng hợp toàn bộ chức năng của trò chơi
const gameResult = function () {
  const serectNumber = Math.trunc(Math.random() * 20) + 1; // Tạo số ngẫu nhiên bằng Math.random() và làm tròn bằng Math.trunc()
  const guess = Number(document.querySelector('.guess').value); // TRuy vấn và gán thuộc tính 'value' --> giá trị nhập từ bàn phím gọi từ DOM
  console.log((document.querySelector('.score').textContent = score)); //Truy vấn và gán thuộc tính 'textContent' với toán tử gán giá trị

  //Khi người chơi không nhập gì cả
  if (!guess) {
    displayMessage('No number!');
    document.querySelector('.number').textContent = '?';
  }
  //Người chơi nhập sai và số lớn hơn kết quả
  else if (guess !== serectNumber) {
    //Điểm sẽ giảm dần khi giá trị vẫn còn lớn hơn 1
    if (score > 1) {
      displayMessage(guess > serectNumber ? 'High score!' : 'Low score!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    //Điểm rơi vào giá trị 0
    else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  //Người chơi đoán đúng kết quả
  else if (guess === serectNumber) {
    document.querySelector('.number').textContent = serectNumber;
    displayMessage('Correct number!');
    highScore += score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
};

document.querySelector('.check').addEventListener('click', gameResult); // Truy vấn và khởi động sự kiện bằng một đối số (code viết sẵn từ JS)
//Khởi tạo chức năng làm mới lại trò chơi
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  highScore = 0;
  displayMessage('Select number!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
