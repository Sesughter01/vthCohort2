// create javascript code here
// This example calls the fullName method of person,using it on person two//
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  document.getElementById("demo").innerHTML = person.fullName.call(person2); 