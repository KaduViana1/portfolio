const theme1 = document.getElementById('theme-1');
const theme2 = document.getElementById('theme-2');
const theme3 = document.getElementById('theme-3');
const background = document.querySelector('#full-calc');
const screen = document.querySelector('.results');
const keypad = document.querySelector('.buttons-container');
const input = document.querySelectorAll('input');
const toggle = document.querySelector('.toggle-container');
const buttons = document.querySelectorAll('button');
const del = document.querySelector('.del');
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equal');
const color = document.querySelectorAll('.color');
const result = document.querySelector('.result');
const slider = document.querySelector('.slider');

input.forEach(() => {
  addEventListener('change', selectTheme);
});
function selectTheme() {
  if (input[0].checked) {
    background.style.backgroundColor = 'hsl(222, 26%, 31%)';
    screen.style.backgroundColor = 'hsl(224, 36%, 15%)';
    keypad.style.backgroundColor = 'hsl(223, 31%, 20%)';
    toggle.style.backgroundColor = 'hsl(223, 31%, 20%)';
    buttons.forEach(i => {
      i.style.backgroundColor = 'hsl(30, 25%, 89%)';
      i.style.boxShadow = '0px 3px hsl(28, 16%, 65%)';
      i.style.color = 'hsl(221, 14%, 31%)';
    });
    del.style.backgroundColor = 'hsl(225, 21%, 49%)';
    del.style.boxShadow = '0px 3px hsl(224, 28%, 35%)';
    del.style.color = 'white';
    reset.style.backgroundColor = 'hsl(225, 21%, 49%)';
    reset.style.boxShadow = '0px 3px hsl(224, 28%, 35%)';
    reset.style.color = 'white';
    equal.style.backgroundColor = 'hsl(6, 63%, 50%)';
    equal.style.boxShadow = '0px 3px hsl(6, 70%, 34%)';
    equal.style.color = 'white';
    slider.style.backgroundColor = 'hsl(6, 63%, 50%)';
    result.style.color = 'white';
    color.forEach(i => {
      i.style.color = 'white';
    });
  } else if (input[1].checked) {
    background.style.backgroundColor = 'hsl(0, 0%, 90%)';
    screen.style.backgroundColor = 'hsl(0, 0%, 93%)';
    keypad.style.backgroundColor = 'hsl(0, 5%, 81%)';
    toggle.style.backgroundColor = 'hsl(0, 5%, 81%)';
    buttons.forEach(i => {
      i.style.backgroundColor = 'hsl(45, 7%, 89%)';
      i.style.boxShadow = '0px 3px hsl(35, 11%, 61%)';
      i.style.color = 'hsl(60, 10%, 19%)';
    });
    del.style.backgroundColor = 'hsl(185, 42%, 37%)';
    del.style.boxShadow = '0px 3px hsl(185, 58%, 25%))';
    del.style.color = 'white';
    reset.style.backgroundColor = 'hsl(185, 42%, 37%)';
    reset.style.boxShadow = '0px 3px hsl(185, 58%, 25%)';
    reset.style.color = 'white';
    equal.style.backgroundColor = 'hsl(25, 98%, 40%)';
    equal.style.boxShadow = '0px 3px hsl(25, 99%, 27%)';
    equal.style.color = 'white';
    slider.style.backgroundColor = 'hsl(25, 98%, 40%)';
    result.style.color = 'hsl(60, 10%, 19%)';
    color.forEach(i => {
      i.style.color = 'hsl(60, 10%, 19%)';
    });
  } else if (input[2].checked) {
    background.style.backgroundColor = 'hsl(268, 75%, 9%)';
    screen.style.backgroundColor = 'hsl(268, 71%, 12%)';
    keypad.style.backgroundColor = 'hsl(268, 71%, 12%)';
    toggle.style.backgroundColor = 'hsl(268, 71%, 12%)';
    buttons.forEach(i => {
      i.style.backgroundColor = 'hsl(268, 47%, 21%)';
      i.style.boxShadow = '0px 3px hsl(290, 70%, 36%)';
      i.style.color = 'hsl(52, 100%, 62%)';
    });
    del.style.backgroundColor = 'hsl(281, 89%, 26%)';
    del.style.boxShadow = '0px 3px hsl(285, 91%, 52%)';
    del.style.color = 'white';
    reset.style.backgroundColor = 'hsl(281, 89%, 26%)';
    reset.style.boxShadow = '0px 3px hsl(285, 91%, 52%)';
    reset.style.color = 'white';
    equal.style.backgroundColor = 'hsl(176, 100%, 44%)';
    equal.style.boxShadow = '0px 3px hsl(177, 92%, 70%)';
    equal.style.color = 'hsl(198, 20%, 13%)';
    slider.style.backgroundColor = 'hsl(176, 100%, 44%)';
    result.style.color = 'hsl(52, 100%, 62%)';
    color.forEach(i => {
      i.style.color = 'hsl(52, 100%, 62%)';
    });
  }
}
