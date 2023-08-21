
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


