const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const button3 = document.querySelector('.button-3');
const button4 = document.querySelector('.button-4');
const button5 = document.querySelector('.button-5');
const button6 = document.querySelector('.button-6');
const button7 = document.querySelector('.button-7');
const button8 = document.querySelector('.button-8');
const button9 = document.querySelector('.button-9');
const button0 = document.querySelector('.button-0');
const buttonreset = document.querySelector('.button-reset');
const buttonminus = document.querySelector('.button-minus');
const buttonplus = document.querySelector('.button-plus');
const buttondivide = document.querySelector('.button-divide');
const buttonx = document.querySelector('.button-x');
const buttondel = document.querySelector('.button-del');
const buttonequal = document.querySelector('.button-equal');
const buttondot = document.querySelector('.button-dot');
let results = '0';
let operator = '=';
let value1 = 0;
let value2 = 0;
let preventor = null;

function calculate() {
  switch (operator) {
    case '+':
      result.innerText = value1 + value2;
      break;
    case '-':
      result.innerText = value1 - value2;
      break;
    case 'x':
      result.innerText = value1 * value2;
      break;
    case '/':
      result.innerText = value1 / value2;
      break;
    default:
  }

  value1 = Number.parseFloat(result.innerText);
}

function setXY() {
  value2 = 0;
  value1 = Number.parseFloat(result.innerText);
  results = 0;
  preventor = true;
}

function displayNumber(x) {
  preventor = false;

  if (results == 0 || result.innerText == '0') {
    results = 1;
    return (result.innerText = x);
  } else if (result.innerText.length >= 10) {
    return result.innerText;
  } else {
    return (result.innerText += x);
  }
}

button1.addEventListener('click', () => {
  displayNumber(1);
});
button2.addEventListener('click', () => {
  displayNumber(2);
});
button3.addEventListener('click', () => {
  displayNumber(3);
});
button4.addEventListener('click', () => {
  displayNumber(4);
});
button5.addEventListener('click', () => {
  displayNumber(5);
});
button6.addEventListener('click', () => {
  displayNumber(6);
});
button7.addEventListener('click', () => {
  displayNumber(7);
});
button8.addEventListener('click', () => {
  displayNumber(8);
});
button9.addEventListener('click', () => {
  displayNumber(9);
});
button0.addEventListener('click', () => {
  displayNumber(0);
});
buttondot.addEventListener('click', () => {
  if (!result.innerText.includes('.')) {
    displayNumber('.');
  }
});
buttonplus.addEventListener('click', () => {
  if (preventor === false) {
    if (value2 == 0) {
      value2 = Number.parseFloat(result.innerText);
      calculate();
    } else {
      calculate();
    }
  }
  operator = '+';
  setXY();
});
buttonminus.addEventListener('click', () => {
  if (preventor === false) {
    if (value2 == 0) {
      value2 = Number.parseFloat(result.innerText);
      calculate();
    } else {
      calculate();
    }
  }
  operator = '-';
  setXY();
});
buttonx.addEventListener('click', () => {
  if (preventor === false) {
    if (value2 == 0) {
      value2 = Number.parseFloat(result.innerText);
      calculate();
    } else {
      calculate();
    }
  }
  operator = 'x';
  setXY();
});
buttondivide.addEventListener('click', () => {
  if (preventor === false) {
    if (value2 == 0) {
      value2 = Number.parseFloat(result.innerText);
      calculate();
    } else {
      calculate();
    }
  }
  operator = '/';
  setXY();
});
buttonreset.addEventListener('click', () => {
  operator = '=';
  value1 = 0;
  value2 = 0;
  results = 0;
  result.innerText = '0';
});
buttonequal.addEventListener('click', function equal() {
  if (value2 == 0) {
    value2 = Number.parseFloat(result.innerText);
    calculate();
  } else {
    calculate();
  }
  preventor = true;
});
buttondel.addEventListener('click', () => {
  if (result.innerText == '0' || result.innerText.length == 1) {
    result.innerText = '0';
  } else {
    result.innerText = result.innerText.slice(0, result.innerText.length - 1);
  }
});
