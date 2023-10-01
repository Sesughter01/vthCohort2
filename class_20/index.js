// class Bankaccount {
//   constructor(name, bank) {
//     this.name = name;
//     this.bank = bank;

//   }
// }

// const person = new Bankaccount ("feranmi", 52) 
// const mycontainer = document.getElementById(demo)
// mycontainer.innerHTML = person.myName
// console.log(person.myName)


class BankAccount {
  constructor(AcctName, Email, PhoneNumber, BVN, AccountNumber) {
      this.Name = AcctName;
      this.mail = Email;
      this.phoneNum = PhoneNumber;
      this.bvn = BVN;
      this.accNum = AccountNumber;
  }

  // This returns an array of all the elements in the constructor above 
  getProperties() {
      return [`Account Name: ${this.Name}`, `Email: ${this.mail}`, `Phone Number: ${this.phoneNum}`, `BVN: ${this.bvn}`, `Account Number: ${this.accNum}`]
  }

  }


const details = new BankAccount('Adesida oluwaferanmi', 'feranmiphillp024@gmail.com', +2349063144452, 2215128029, 6447410288);
let propDisplay = details.getProperties();



const btn = document.getElementById('acctBtn');
const paraDetails = document.getElementById('demo');

// Function to display the elements in the constructor 
// with a 'join' method so as to avoid the values in the array staying on the same line

function bankAccountDisplay() {
  paraDetails.innerHTML = propDisplay.join('<br>');
}

// A toggle and an event listener to display the customer details 

const toggleDisplay = btn.classList

btn.addEventListener('click', () => {
  const customerDetails = toggleDisplay.toggle('select');
  if(customerDetails) {
      bankAccountDisplay();
  } else {
      paraDetails.innerHTML = ''
}
})