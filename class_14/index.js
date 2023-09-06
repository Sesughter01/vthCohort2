const models = ['user','student','teachers','subject']
const model=[]
let text = "";
let model1 = document.querySelector(".model1")
let model2 = document.querySelector(".model2")
const p= document.getElementById("demo")
const p2= document.getElementById("demo2")

models.forEach(adddcontent)
function adddcontent(value, index, array) {
    p.innerHTML += `${value}  <br>` 
}


models[0] = "buyer"
models[1] = "seller"
models[2] = "customer"
models[3] = "purchaser"

model.push("buyer")
model.push("seller")
model.push("customer")
model.push("purchaser")

model.forEach(adddcontent2)

function adddcontent2(value, index, array) {
    p2.innerHTML += `${value}  <br>` 
}

