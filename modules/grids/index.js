// create javascript code here
//  create an object with two properties and a method
  // const person = {
    // firstName:"happiness",
    // lastName: "Daniel",
    // fullName: function() {
      // return this.firstName + " " + this.lastName;
    // }
  // }
  // document.getElementById("demo").innerHTML = person.fullName();   
// JavaScript Function bind

   // This example creates 2 objects (person and member)
   // The member object borrows the fullname method from person 

  const person = {
    firstName:"victor",
    lastName: "sunday",
    fullName: function() {
      return this.firstName + " " + this.lastName;
     }
  }
 
  const member = {
   firstName:"Nelson",
   lastName: "Mandella",
 }
 
  let fullName = person.fullName.bind(member);
 
 document.getElementById("demo2").innerHTML = fullName();

//  JavaScript Function Closures
//  Counting with a global variable.
 // Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 6 times
add();
add();
add();
add();
add();
add();

// The counter should now be 6
document.getElementById("demo3").innerHTML = "The counter is: " + counter;

// create a class method named"age",that returns the car age.

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2013);
document.getElementById("demo4").innerHTML =
"My car is " + myCar.age() + " years old.";

