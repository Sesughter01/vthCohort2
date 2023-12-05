// create javascript code here
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
  const person = {
    firstName:"happiness",
    lastName: "Daniel",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  document.getElementById("demo4").innerHTML = person.fullName(); 
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
  
  document.getElementById("demo6").innerHTML = fullName();
  
