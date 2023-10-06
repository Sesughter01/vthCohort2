class BankAccount {
  constructor(name, email, bvn) {
    this.name = name;
    this.email = email;
    this.bvn = bvn;
    
    this.accountNumber = this.generateAccountNumber();
  }
}

console.log(`${2+2}`)