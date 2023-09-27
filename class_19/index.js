

// // / create a function that takes an array of strings and return an object that has the
// // element of the string array as properties and number of times each element occurs in
// // the string as value

function stringCount() {
    const inputArrayElement = document.getElementById('inputArray');
    const resultElement = document.getElementById('result');

    const inputString = inputArrayElement.value;
    const stringArray = inputString.split(',');

    const result = {};

    for (let i = 0; i < stringArray.length; i++) {
      const element = stringArray[i].trim(); 

      if (!result[element]) {
        result[element] = 1;
      } else {
        
        result[element]++;
      }
    }

 // Display the result as a JSON string
 resultElement.textContent = JSON.stringify(result,null,2);
}

// const displayPara = document.querySelector('#demo');

// // Function that takes an array of string
// function myArray(items){

//     // Empty object to hold the elemen
//     const objectArray = {}; 
    
//     // We run a loop now to check through every elements in the item array
//     for (i = 0; i < items.length; i += 1) {
//         const element = items[i];

//         if(!objectArray[element]) {
//             objectArray[element] = 1;
//         } else {
//            objectArray[element]++
//         }
//     }

//     return JSON.stringify(objectArray);
// }

// // Calling the myArray function
// displayPara.innerText = (myArray(['a', 'a', 'balc', 'balc', 'balc']));