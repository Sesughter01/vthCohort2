<<<<<<< HEAD
//create a function using arrow function notation that takes an array and displays
// all the elements of the array
const displayArrayElements = (arr) => {
    const outputDiv = document.getElementById('output');
    arr.forEach((element) => {
        const elementParagraph = document.createElement('p');
        elementParagraph.textContent = element;
        outputDiv.appendChild(elementParagraph);
    });
};

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
displayArrayElements(myArray);

// create a function that takes an array of strings and return an object that has the
// element of the string array as properties and number of times each element occurs in
// the string as value

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
    resultElement.textContent = JSON.stringify(result, null, 2);
  }

  
=======
// Create a function using arrow function notation that takes and array and displays
//  all the elements of the array

const displayArrayElement = (arr)=>{
//   container to display array elements
  const outputDiv = document.getElementById('output');

  arr.forEach(element => {
       const elementPara = document.createElement('p')
       elementPara.innerHTML = element
       outputDiv.appendChild(elementPara)
  });

}

const myArray = ['a','b','c']
displayArrayElement(myArray);

// Create a function that takes an array of strings and returns an object 
// that has the elemnts of the string array as properties
// the number times each element occurs in the string as value

/**
 * 
 * arr= ['a','bacl','bacl']
  strArray(arr)
  {'a': 1, 'bacl':2}

 */

>>>>>>> 4664d62927b5e99b6631d7ce6eec720b4466ed94
