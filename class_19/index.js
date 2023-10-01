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

  