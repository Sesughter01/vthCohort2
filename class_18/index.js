<<<<<<< HEAD
// // Code here
// // "use strict"
// // try{
// //     x = 78
// //     console.log(x); 

// // }
// // catch(err){
// //     console.log(err)
// // }
// // x= 78;

// // console.log(x); 

// const myScope2 = "Show me";
// // var myScope ; 
// // let keyword for a variable does not allow hoisting
// // var keyword for a variable  allows hoisting
// // console.log(myScope);
// // const findscope = ""
// function findScope(){
//      myScope = "scope";
//    console.log(myScope);
// }
// findScope();
// console.log(myScope); 

// try{
    
//     console.log(myScope); throw "exist here"

// } 

// catch(err2){
//     console.log(err2);
// }
// let p1; let p2;
// const obj = {
   
//  p1:5,
//  p2:45

// }

// // console.log(obj.p1);

// // Regular Function:
// hello = function() {
//     document.getElementById("demo").innerHTML = `${this} <br> <br>`;
//   }
  
//   // The window object calls the function:
//   window.addEventListener("load", hello);
  
  
//   // A button object calls the function:
//   document.getElementById("btn").addEventListener("click", hello);

let hello = "";

hello = function() {
  document.getElementById("parrr").innerHTML += `${this} <br><br>`;
}

//The window object calls the function:
window.addEventListener("load", hello);

//A button object calls the function:
document.getElementById("click1").addEventListener("click", hello);
=======
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
hello = function() {
    document.getElementById("demo").innerHTML = `${this} <br> <br>`;
  }
  
  // The window object calls the function:
  window.addEventListener("load", hello);
  
  
  // A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello);

//   A function that takes an array of strings as argument and returns the number
// of times each string occurs in the array in an object 

strArray = ['apple','apple','mango','oranges','grapes'];

// function countWords(arr){
//     const objj =[];
//     let propss;
//     for(const strr of arr){
//         const hayStack = new RegExp(strr, 'igm');
//          propss=hayStack.exec(arr);
//         // console.log(propss);
//         objj[strr]=propss.length;
//     }
//     // return JSON.stringify(objj);
//     // return objj;
//     return propss;
// }

// const arr = ['apple','mango','pineapple','apple']
function countWords(arr) {
    // Create an empty object to store the word counts
    const wordCount = {
     
       
    };
  
    // Loop through the array of strings
    for (const word of arr) {
      // If the word is not in the wordCount object, initialize its count to 1
      // Otherwise, increment its count by 1
      if (wordCount[word]) {
        wordCount[word]++;
        
      } else {
        wordCount[word] = 1;
      }
    }
  
    // Return the word count object
    return JSON.stringify(wordCount);
    // return wordCount;
  }
  
  // Example usage:
  const wordsArray = ["apple", "apple", "mango","mango"];
  const wordCounts = countWords(wordsArray);
  console.log(wordCounts); // Output: {"apple": 2, "mango": 1}
  

// const ans = countWords(strArray);
// console.log(ans);

>>>>>>> 025555177f6fbdc075ad9fecfcd6fc22fc5b1d79
