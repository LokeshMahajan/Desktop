//All the Varable Initialized
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

//Restart button Logic
function clearBoard() {
  for(var i=0; i<squar.length; i++){
    squar[i].textContent = '';
  }
}
//Restart Event Calling
restart.addEventListener('click',clearBoard);


//Event Listener and anonymousfunction to add O and X
one.addEventListener('click',function(){
  if (one.textContent === ''){
    one.textContent = 'X';
  }else if (one.textContent === 'X'){
    one.textContent = 'O';
  }else {
    one.textContent = '';
  }
  check(one.textContent)
})


two.addEventListener('click',function(){
  if (two.textContent === ''){
    two.textContent = 'X';
  }else if (two.textContent === 'X'){
    two.textContent = 'O';
  }else {
    two.textContent = '';
  }
  check(two.textContent)
})


three.addEventListener('click',function(){
  if (three.textContent === ''){
    three.textContent = 'X';
  }else if (three.textContent === 'X'){
    three.textContent = 'O';
  }else {
    three.textContent = '';
  }
  check(three.textContent)
})

four.addEventListener('click',function(){
  if (four.textContent === ''){
    four.textContent = 'X';
  }else if (four.textContent === 'X'){
    four.textContent = 'O';
  }else {
    four.textContent = '';
  }
  check(four.textContent)
})


five.addEventListener('click',function(){
  if (five.textContent === ''){
    five.textContent = 'X';
  }else if (five.textContent === 'X'){
    five.textContent = 'O';
  }else {
    five.textContent = '';
  }
  check(five.textContent)
})

six.addEventListener('click',function(){
  if (six.textContent === ''){
    six.textContent = 'X';
  }else if (six.textContent === 'X'){
    six.textContent = 'O';
  }else {
    six.textContent = '';
  }
  check(six.textContent)
})

seven.addEventListener('click',function(){
  if (seven.textContent === ''){
    seven.textContent = 'X';
  }else if (seven.textContent === 'X'){
    seven.textContent = 'O';
  }else {
    seven.textContent = '';
  }
  check(seven.textContent)
})

eight.addEventListener('click',function(){
  if (eight.textContent === ''){
    eight.textContent = 'X';
  }else if (eight.textContent === 'X'){
    eight.textContent = 'O';
  }else {
    eight.textContent = '';
  }
  check(eight.textContent)
})

nine.addEventListener('click',function(){
  if (nine.textContent === ''){
    nine.textContent = 'X';
  }else if (nine.textContent === 'X'){
    nine.textContent = 'O';
  }else {
    nine.textContent = '';
  }
  check(nine.textContent);
})


//Function Combination To check who won the game..

function check(combination){
    if ((one.textContent === combination) && (two.textContent === combination) && (three.textContent === combination)) {
        window.alert('Player '+combination+' won');
    }
    else if ((one.textContent == combination) && (four.textContent == combination) && (seven.textContent == combination)) {
      window.alert('Player '+combination+' won');
    }
    else if ((seven.textContent == combination) && (eight.textContent == combination) && (nine.textContent == combination)) {
        window.alert('Player '+combination+' won');
    }
    else if ((three.textContent == combination) && (six.textContent == combination) && (nine.textContent == combination)) {
        window.alert('Player '+combination+' won');
    }
    else if ((one.textContent == combination) && (five.textContent == combination) && (nine.textContent == combination)) {
        window.alert('Player '+combination+' won');
    }
    else if ((three.textContent == combination) && (five.textContent == combination) && (seven.textContent == combination)) {
        window.alert('Player '+combination+' won');
    }
    else if ((two.textContent == combination) && (five.textContent == combination) && (eight.textContent == combination)) {
        window.alert('Player '+combination+' won');
    }
    else if ((four.textContent == combination) && (five.textContent == combination) && (six.textContent == combination)) {
      window.alert('Player '+combination+' won');
    }
}
