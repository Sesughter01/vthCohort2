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