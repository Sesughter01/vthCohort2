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

