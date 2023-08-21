// Javascript leaves 

let header = document.querySelector('.header_navbar');
let main = document.getElementById('main_content');
// Function to compute the product of p1 and p2


function myFunction(x) {

   const elementToCreate = document.createElement(x);
       elementToCreate.className = 'text';
       elementToCreate.innerText = 'This is an H2 Element';
         
//    paragraph.appendChild("This i;
   main.appendChild(elementToCreate);
    // alert(x * y);
    // return x * y*z;s
 
  }

  function displayElements(h,p,hText,pText){
     
   const elementToCreateHeading = document.createElement(h);
   elementToCreateHeading.className = 'heading';
   elementToCreateHeading.innerText = hText;

   const elementToCreatePragragh = document.createElement(p);
   elementToCreatePragragh.className = 'para';
   elementToCreatePragragh.innerText =pText;
     
//    paragraph.appendChild("This i;
   main.append( elementToCreateHeading,elementToCreatePragragh);
  }

  function displayTemperature(myTemperature){
    main.innerHTML = toCelsius(myTemperature)
  }

// Converts Degrees farenheit to Celcius
  function toCelsius(fahrenheit) {
   
     (5/9) * (fahrenheit-32);
  }
  
//   let num1 =  myVra;
//   alert(num1)
  function scopeValue(){
    let num2 = "Value";
    let myVra = num2;

    alert("2:" +   myVra)
  }
//   scopeValue();
//  let num3 = myVra;

//   How to Create  A Javascript Object

const car = {
    name:'toyota',
    color:'white',
    weight:500
};
const emptyObj = {};

console.log(typeof(emptyObj))


  