// let hello = "";
        
//         hello = () => {
//           return "Hello World!";
//         }
        
//         document.getElementById("demo").innerHTML = hello();

// const myArray = (sheffs) =>{
//   sheffs.array.forEach(sheffs => {
//     console.log()
//   });
// }

// Create a function that takes an array of strings and returns an object 
// that has the elemnts of the string array as properties
// the number times each element occurs in the string as value
​
/**
 * 
 * arr= ['a','bacl','bacl']
  strArray(arr)
  {'a': 1, 'bacl':2}
​
 */

// function sheffs(arr) {

//   const sheffsObj = {};

 
//   for (const str of arr) {
  
//     if (!sheffsObj.hasOwnProperty(str)) {
//       sheffsObj[str] = 1;
//     } else {
     
//       sheffsObj[str]++;
//     }
//   }

//   return sheffsObj;
// }

// const inputArray = ["apple", "banana", "apple", "orange", "banana"];
// const result = sheffs(inputArray);
// console.log(result);


const resultElement = document.getElementById('result');

const stringArray = inputString.split(',');


function stringCount() {
  const inputArrayElement = document.getElementById('inputArray');
  

  const inputString = inputArrayElement.value;


  const result = {};

  for (let i = 0; i < stringArray.length; i++) {
    const element = stringArray[i].trim(); 

    if (!result[element]) {
      result[element] = 1;
    } else {
      
      result[element]++;
    }
  }

 
  resultElement.textContent = JSON.stringify(result, null, 2);
}