const models = ['User','Student','Teachers','Subject'];
const models2 = [ ];
const models3 = [ ];
let text = '';
let divModel = document.querySelector('.divModel_1');
let divModel_2 = document.querySelector('.divModel_2');
let divModel_3 = document.querySelector('.divModel_3');
const p = document.getElementById('arrays');
const p1 = document.getElementById('arrays1');
const p2 = document.getElementById('arrays2');

// Original elements in the array above

models.forEach(addContent);

 function addContent(value, index, arrays) {

    p.innerHTML += `${value} <br>`;
    // text = p;
    // divModel.appendChild(text);
}



// changing elements in the array above

// Row two model

models[0] = 'Instructors';
models[1] = 'Mechanics';
models[2] = 'Validators';
models[3] = 'Analysts';


models2.push(models[0]);
models2.push(models[1]);
models2.push(models[2]);
models2.push(models[3]);




models2.forEach(addContent2);
    
 function addContent2(value, index, arrays) {
  
    p1.innerHTML += `${value} <br>`;
    // text = p1;
    // divModel_2.appendChild(text);
}

// Row Three model



models2[0] = 'HOC';
models2[1] = 'HOD';
models2[2] = 'Advisor';
models2[3] = 'Dean';

models3.push(models2[0])
models3.push(models2[1])
models3.push(models2[2])
models3.push(models2[3])

 models3.forEach(addContent3);
    
  function addContent3(value, index, arrays) {
  
     p2.innerHTML += `${value} <br>`;
     // text = p1;
    // divModel_2.appendChild(text);
}