// create javascript code
// Create Object from JSON String
let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
// JavaScript Debugger
let x = 15 * 5;
debugger;
document.getElementById("demo2").innerHTML = x;
// JavaScript Functions
function myFunction(a, b) {
    return a * b;
  }
  document.getElementById("demo3").innerHTML = myFunction(10, 2); 
// create an object with two properties and a method
  // const person = {
    // firstName:"happiness",
    // lastName: "Daniel",
    // fullName: function() {
      // return this.firstName + " " + this.lastName;
    // }
  // }
  // document.getElementById("demo4").innerHTML = person.fullName(); 
// fullName method of person is applied on person1
  const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }

  const person1 = {
    firstName:"happiness",
    lastName: "Daniel"
  }
  
  document.getElementById("demo5").innerHTML = person.fullName.apply(person1); 
   
  // JavaScript Class Inheritance
  // create a class named"model" which will inherit the methods from the "car"class:
  // Use the "extends" keyword to inherit all methods from another class.
  // Use the "super" method to call the parent's constructor function.

  class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    display() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  const myCar = new Model("toyota", "camary");
  document.getElementById("demo6").innerHTML = myCar.display();