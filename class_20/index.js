<<<<<<< HEAD
class BankAccount {
  constructor(name, email, bvn) {
    this.name = name;
    this.email = email;
    this.bvn = bvn;
    
    this.accountNumber = this.generateAccountNumber();
  }
}

console.log(`${2+2}`)
=======
  // Creating an Object using JavaScript object literal
  const myObj = {
    myName : "Pakuro",
    myAge:32,
      setMyName(newName){
        this.myName=newName;
    },
    getMyName(){
       return this.myName
    }
  }
//   console.log(myObj.myName)

// Creating a javaScript class 
class MyClass {
  constructor(f_name,age,color){
     this.myName = f_name
     this.myAge = age
     this.myColor = color
  }
  getFname(){
    return this.f_name
  }
  setFname(newName){
    this.f_name = newName
  }

}

const person = new MyClass("Vince",32,"purple")
const fruit = new MyClass("Mango",100, "black")
const myContainer = document.getElementById('demo')

const container1 =document.getElementById('container1')
const container2 =document.getElementById('container2')
container1.style.backgroundColor = person.myColor
const myContainer2 = document.querySelector('.myObj')
container2.style.backgroundColor = fruit.myColor
myContainer.innerHTML =myObj.getMyName()
fruit.setFname('apple')
myContainer2.innerHTML = fruit.getFname()
// console.log(person.myName)
>>>>>>> 025555177f6fbdc075ad9fecfcd6fc22fc5b1d79
