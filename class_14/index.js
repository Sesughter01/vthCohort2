const models = ['user','student','teachers','subject']
const models2 = []
let grab = document.querySelector('#second')
let bag = document.querySelector('.second')

let ogbonno = document.querySelector('.jink')
let gbah = document.querySelector('.sheffs')
let text = ''

models.forEach(addContent);

function addContent(value, index, array){
   gbah.innerHTML+=`${value} <br>`

    ogbonno.appendChild(gbah)
}

models[0] = 'Rice'
models2.push(models[0])
models[1] = 'Beans'
models2.push(models[1])
models[3] = 'Jollof'
models2.push(models[2])
models[4] = 'dodo'
models2.push(models[3])





models2.forEach(add2);

function add2(value, index, array){
    bag.innerHTML+=`${value} <br>`
}



//appendChild(text)

//models[0, 1, 2, 3] = 'Login', 'Password', 'gear', 'brake';
