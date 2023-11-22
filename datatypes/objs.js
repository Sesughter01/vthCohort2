let text = "Apple, Banana, Kiwi";

let part = text.slice(7,13);

console.log(part);

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