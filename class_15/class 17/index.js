
function myFunction() {
    //got the id from the paragraph element
  const message = document.getElementById("p01");
  message.innerHTML = "";

  let x = document.getElementById("demo").value;
  try { 
    if(x.trim() == "")  throw "empty";
    //displayed not a number if a letter is detected
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  //it interpretes the error 
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}


"use strict";
document.getElementById("demo").innerHTML = myFunction();

function myFunction() {
  return this;

  alert(this)
}
