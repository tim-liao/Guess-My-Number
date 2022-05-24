'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '**Correct Number!**';

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
document.querySelector('.guess').value = '22';
*/
let score = 20;
let highscore = 0;
let sercetNumber = Math.trunc(Math.random() * 20) + 1;
let displayMessage = function (x, y) {
  document.querySelector(x).textContent = y;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('.message', '## NO Number ! ##');
    //document.querySelector('.message').textContent = '## NO Number ! ##';
  } else if (guess === sercetNumber) {
    displayMessage('.message', '**Correct Number!**');
    //document.querySelector('.message').textContent = '**Correct Number!**';
    displayMessage('.number', sercetNumber);
    //document.querySelector('.number').textContent = sercetNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      displayMessage('.highscore', score);
      //document.querySelector('.highscore').textContent = score;
      highscore = score;
    } else {
      highscore = highscore;
    }
  } else if (guess !== sercetNumber) {
    if (score > 1) {
      score--;
      displayMessage('.score', score);
      //document.querySelector('.score').textContent = score;
    } else if (score < 1) {
      displayMessage('.message', 'You looost this game QWQ');
      //document.querySelector('.message').textContent ='You looost this game QWQ';
    }
    if (guess > sercetNumber) {
      displayMessage('.message', '**Too High!**');
      //document.querySelector('.message').textContent = '**Too High!**';
    } else {
      displayMessage('.message', '**Too Low!**');
      //document.querySelector('.message').textContent = '**Too Low!**';
    }
  }
  /*else if (guess > sercetNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '**Too High!**';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You looost this game QWQ';
    }
  } else if (guess < sercetNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '**Too Low!**';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You looost this game QWQ';
    }
  }*/
});
document.querySelector('.again').addEventListener('click', function () {
  console.log('click!');
  score = 20;
  document.querySelector('.score').textContent = score;
  sercetNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

/*
let s = '()[]{}';
var isValid = function (s) {
  s.split('');
  let x = true;
  for (let i = 0; i <= s.length - 1; i =i+2) {
    if (s[i] == '(' && s[i + 1] == ')') {
      x = x;
    } else if (s[i] == '[' && s[i + 1] == ']') {
      x = x;
    } else if (s[i] == '{' && s[i + 1] == '}') {
      x = x;
    } else {
      x = false;
      break;
    }
  }
  return x;
};
*/
/*
let s = '()';
var isValid = function (s) {
  let y = s.split('');
  let x = true;
  for (let i = 0; i < y.length; i++) {
    if (i < 0) i = 0;
    if (
      (y[i] == '(' && y[i + 1] == ')') ||
      (y[i] == '[' && y[i + 1] == ']') ||
      (y[i] == '{' && y[i + 1] == '}') ||
      y.length == 0
    ) {
      //如果()，{}，[]，則刪除s[i]和[i+1]並且重新來過且x為真
      x = true;
      y.splice(i, 2);
      i = i - 2;
    } else {
      x = false;
    }
  }
  return x;
};
console.log(isValid(s));
a = { '{': '}', '[': ']', 'n   ame': 'Peter' };
a['name'];
*/
/*
let nums = [1, 3, 5, 6];
let target = 5;
var searchInsert = function (nums, target) {
  for (i = 0; i <= nums.length; i++) {
    if (nums[i] == target || nums[i] > target) {
      return i; //如果相等則回傳索引 ;如果target大於nums[i]，則回傳索引
    } else if (nums[i] < target) {
      //如果target小於nums[i]，則繼續跑
    } else if ((i = nums.length)) {
      return i; //如果找完整個都沒有，回傳陣列長度(即最大索引值+1)
    }
  }
};
*/
