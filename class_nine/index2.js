<<<<<<< HEAD
const Bankaccount = {
    firstName : 'Sheriff',
    lastName : 'Nasr',
    Gender : 'Male',
    Age : '22',
    Address: 'Pipe-line road, Magboro',
    Bvn:'22223334458',
    occupation: 'jamonjamon',
    Accounttype:'individuals',

    display(){
        return "Name: "+this.firstName +"<br>" + "lastName: " + this.lastName + "<br>" + "Gender: "+ this.Gender + " <br>" +"Age:" +this.Age + "<br>" + "Address:" +this.Address + " <br>" + "occupation:" +this.occupation + "<br> " + "Accounttype:" +this.Accounttype + "<br>"
    }


}
document.getElementById("btn").addEventListener('click', ()=>{
     var d = document.getElementById("display").innerHTML = Bankaccount.display();
     


 })
=======
const bankAccount = {
    account: 'Sterling Bank',
    acctNo: '0123456789',
    amount: '22000',
    openedOn: '31st July 2004',
    expiresOn: '1st may 2069',
    demo2(){
        return "Account Name: " + this.account + "<br>Account Number: " + this.acctNo + "<br>Total Balance: " + this.amount 
        + "<br>Opened on: " + this.openedOn + "<br>Will Expire In: " + this.expiresOn;
    
    }
  
  
    };
>>>>>>> victorherald
