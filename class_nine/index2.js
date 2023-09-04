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

const btn=document.querySelector('#btn0')

const container=document.getElementById('demo2')
const btnClasses=btn.classList;



btn.addEventListener('click',()=>{
    const connect=btnClasses.toggle('c')
 
    if(connect){
       container.innerHTML= bankAccount.demo2()
    }

    else{
        container.innerHTML=""
    }


})  
