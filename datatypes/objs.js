let text = "Apple, Banana, Kiwi";

<<<<<<< HEAD
let fruit = text.slice(0,5);

document.getElementById("fruit").innerHTML=fruit;
=======
let part = text.slice(7,13);

console.log(part);
>>>>>>> 958253063444963abc7e6d73148ae2763129cfcd

function updateBrand(obj){
    obj.brand = "Toyota";

    // obj=null
    return obj.brand
}






const car = {
    brand:"Honda",
    model:"Accord",
    year :1998
}
// console.log(car.brand)


document.getElementById("card_title3").innerHTML = updateBrand(car)
// document.getElementById("account_number2").innerHTML = person.id

const person = {
    firstName:"John",
    lastName:"Doe",
    id:5566,
    fullName:function (){
        return this.firstName + " " + this.lastName
    },
}

document.getElementById("card_title2").innerHTML = person.fullName()
document.getElementById("account_number2").innerHTML = person.id

// console.log(this)