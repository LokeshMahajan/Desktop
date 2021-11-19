//Calling DOM object and assigning it to a variable head..
var head = document.querySelector("h1")



//Function to generate random colours
function color(){
  var a = '123456789ABCDEF';
  var c = '#';
  for(var i =0; i<6;i++){
    c += a[Math.floor(Math.random()*16)];
  }
  return c
}
//Function to assign the random colors to heading
function hcolor(){
  input = color()
  head.style.color = input;
}

//Setting the intervals 500 milliseconds
setInterval("hcolor()",500);
