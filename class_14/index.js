
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

// const models = ['user','student','teachers','subject']

// const models = ['user','student','teachers','subject'];
// const models2 = [ ];

// const models = ['user','student','teachers','subject']

// const models2= ['user','student','teachers','subject'];
// const models3 = 
// const models = ['user','student','teachers','subject'];
// const models2 = [ ];




const models = ['user','student','teachers','subject'];
const models2 = [ ];

let text = '';
let divModel = document.querySelector('.divModel');
let divModel_2 = document.querySelector('.divModel_2');
const p1 = document.getElementById('arrays1');

// Original elements in the array above

const p = document.getElementById('arrays');
models.forEach(addContent);

 function addContent(value, index, arrays) {

    p.innerHTML += `${value} <br>`;
    // text = p;
    // divModel.appendChild(text);


}

}

//appendChild(text)

//models[0, 1, 2, 3] = 'Login', 'Password', 'gear', 'brake';
// changing elements in the array above

// adding elements in the array in line 1

models[0] = 'Instructors';
models[1] = 'Mechanics';
models[2] = 'Validators';
models[3] = 'Analysts';


models2.push('Instructors');
models2.push('Mechanics');
models2.push('Validators');
models2.push('Analysts');




models2.forEach(addContent);
    
 function addContent(value, index, arrays) {
  
    p1.innerHTML += `${value} <br>`;
    // text = p1;
    // divModel_2.appendChild(text);
}


// models2.push('HOC');
// models2.push('HOD');
// models2.push('Advisor');
// models2.push('Dean');


// models2.forEach(addContent);
    
//  function addContent(value, index, arrays) {
  
//     p1.innerHTML += `${value} <br>`;
//     // text = p1;
//     // divModel_2.appendChild(text);
