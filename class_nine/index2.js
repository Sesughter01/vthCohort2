 // How to create a javascript object= BANK ACCOUNT
 const bankAccount = {
    accountNumber: '123456789',
    accountHolder: 'Oyeniran Mayowa',
    balance: 5000,
    currency: 'NGN',
    details(){
        return "Account name:" + this.accountHolder + " Account Number:"+ this.accountNumber + " Account Balance: "+ this.balance + " Currency:" + this.currency;
        
    }
    
  };
  