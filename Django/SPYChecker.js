var name = prompt("Enter Your First Name")
var lname = prompt("Enter Your Last Name")
var age = prompt("Enter Your Age")
var height = prompt("Enter Your Height in cm")
var pname = prompt("Enter Your Pet Name")

if ((name[0] === lname[0]) && (age>=20 && age<=30) && (height>=170) && (pname[pname.length-1] === "y")){

  console.log("It is a spy")
}else{
  console.log("It is a User")
}
