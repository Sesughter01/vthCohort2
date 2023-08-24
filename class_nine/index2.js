 // How to create a javascript object= BANK ACCOUNT
 const bankAccount = {
    accountNumber: '123456789',
    accountHolder: 'Oyeniran Mayowa',
    balance: 5000,
    currency: 'NGN',
    details(){
        return "Account Name: " + this.accountHolder + "<br> Account Number: "  + this.accountNumber + "<br> Account Balance: "+ this.balance + "<br> Currency: " + this.currency;
        
    }
    
  };
  