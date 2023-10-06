
const models = ['user','student','teachers','subject']

const models2= ['user','student','teachers','subject'];
const models3 = [ ];
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
