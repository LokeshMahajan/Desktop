var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");


var restart = document.querySelector("#b");
var squar = document.querySelectorAll("td");

function clearBoard() {
  for(var i=0; i<squar.length; i++){
    squar[i].textContent = '';
  }
}

restart.addEventListener('click',clearBoard);



one.addEventListener('click',function(){
  if (one.textContent === ''){
    one.textContent = 'X';
  }else if (one.textContent === 'X'){
    one.textContent = 'O';
  }else {
    one.textContent = '';
  }
})


two.addEventListener('click',function(){
  if (two.textContent === ''){
    two.textContent = 'X';
  }else if (two.textContent === 'X'){
    two.textContent = 'O';
  }else {
    two.textContent = '';
  }
})


three.addEventListener('click',function(){
  if (three.textContent === ''){
    three.textContent = 'X';
  }else if (three.textContent === 'X'){
    three.textContent = 'O';
  }else {
    three.textContent = '';
  }
})

four.addEventListener('click',function(){
  if (four.textContent === ''){
    four.textContent = 'X';
  }else if (four.textContent === 'X'){
    four.textContent = 'O';
  }else {
    four.textContent = '';
  }
})


five.addEventListener('click',function(){
  if (five.textContent === ''){
    five.textContent = 'X';
  }else if (five.textContent === 'X'){
    five.textContent = 'O';
  }else {
    five.textContent = '';
  }
})

six.addEventListener('click',function(){
  if (six.textContent === ''){
    six.textContent = 'X';
  }else if (six.textContent === 'X'){
    six.textContent = 'O';
  }else {
    six.textContent = '';
  }
})

seven.addEventListener('click',function(){
  if (seven.textContent === ''){
    seven.textContent = 'X';
  }else if (seven.textContent === 'X'){
    seven.textContent = 'O';
  }else {
    seven.textContent = '';
  }
})

eight.addEventListener('click',function(){
  if (eight.textContent === ''){
    eight.textContent = 'X';
  }else if (eight.textContent === 'X'){
    eight.textContent = 'O';
  }else {
    eight.textContent = '';
  }
})

nine.addEventListener('click',function(){
  if (nine.textContent === ''){
    nine.textContent = 'X';
  }else if (nine.textContent === 'X'){
    nine.textContent = 'O';
  }else {
    nine.textContent = '';
  }
})
