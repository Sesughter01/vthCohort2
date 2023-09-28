// console.log(AcctNum);
// let accNo = Math.round(Math.random()*1e11);
// console.log(accNo);

// Declaration of the class that holds the Bank details
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


const details = new BankAccount('Oloyede Paul', 'oloyedepaul300@gmail.com', +2349070735557, 40495126777, 6447410288);
let propDisplay = details.getProperties();
// console.log(details);
// console.log(propsDisplay);



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
        paraDetails.innerHTML = ''
    }
})

