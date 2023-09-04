


// const btn = document.querySelector("#showDet");
// const btnClasses = btn.classList;

// const outcome = btnClasses.toggle(".Dets")

// btn.addEventListener = ("click", () =>{
  
// if (outcome) {
//     customerDetails()
// }

// else{

// }

// })






const BankAcc = {
    AccName: 'Paul Oloyede',
    PhoneNumber:'09070735557', 
    HouseAddress:'Toso Olododo, Magboro-Akeran, Ogun state',
    TypeOfBankAcc:'Business account',
    Occupation:'Junior Dev',
    AccNumber:'1234567890',
    AccountBal: 'NGN2000',


 customer(){
    return "Customer Name:" + BankAcc.AccName + " " + "<br>Customer PhoneNumber:" + BankAcc.PhoneNumber +
    "<br>Customer address:" + BankAcc.HouseAddress +
    "<br>Customer account type:" + BankAcc.TypeOfBankAcc + "<br>Customer occupation:" + BankAcc.Occupation + 
    "<br>Customer account no:" + BankAcc.AccNumber + "<br>Customer account balance:" + BankAcc.AccountBal;

}

};


function customerDetails()  {
    document.getElementById('customer').innerHTML = BankAcc.customer()
}


const btn = document.querySelector("#showDet");
const acc = document.querySelector("#customer");

const port = btn.classList

btn.addEventListener("click", () => {
    
    const outcome = port.toggle("select")
    
    if(outcome) {
        customerDetails() 
    }
    else{
        document.getElementById('customer').innerHTML = ""
    }
}
)