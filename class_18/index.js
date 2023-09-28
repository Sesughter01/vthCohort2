// Code here
// "use strict"
// try{
//     x = 78
//     console.log(x); 

// }
// catch(err){
//     console.log(err)
// }
// x= 78;

// console.log(x); 

const myScope2 = "Show me";
// var myScope ; 
// let keyword for a variable does not allow hoisting
// var keyword for a variable  allows hoisting
// console.log(myScope);
// const findscope = ""
function findScope(){
     myScope = "scope";
   console.log(myScope);
}
findScope();
console.log(myScope); 

try{
    
    console.log(myScope); throw "exist here"

} 

catch(err2){
    console.log(err2);
}
let p1; let p2;
const obj = {
   
 p1:5,
 p2:45

}

// console.log(obj.p1);

// Regular Function:
// we passed an anon function to a global variable called 'hello' which then changes the content of the paragraph
// hello = function() {
//     document.getElementById("demo").innerHTML = `${this} <br> <br>`;
//   }

// An anon arrow function that is passed to a global variable 'hello'


hello = () => {
    document.getElementById("demo").innerHTML = `${this} <br> <br>`;
  }
  
  // The window object calls the function:
  window.addEventListener("load", hello);
  
  
  // A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello);