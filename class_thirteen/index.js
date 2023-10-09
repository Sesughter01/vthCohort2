const x = 78;
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const container = document.querySelector('.stdData');
const student = {

    student_name:'Ademola',
    student_reg_num:123321,
    getNum(){
        return  this.student_reg_num
    },
    getName(){
        return   this.student_name;
    },
    setName(new_student_name){
      this.student_name = new_student_name;
      return  this.student_name;
    },
    setNum(new_student_num){
      this.student_reg_num = new_student_num;
      return  this.student_reg_num;
    }
}

const myObj = {}
const myStr = 'String'


// Get Student Name and Number
const stdName = student.getName();
const stdNum = student.getNum();

// Create New Student
const newStdName = student.setName('Feranmi');
const newStdNum = student.setNum(343265);
// alert(newStdNum);

const btnClasses = btn.classList;
btn.addEventListener('click',()=>{
    const addToggle = btnClasses.toggle('open');
    const check = addToggle ? "true":"false";
    // console.log(check)
    const student_data = document.createElement('div');
    const student_name_container = document.createElement('h3');
    const student_num_container = document.createElement('p');
    if(check == "true"){
        student_name_container.innerText = stdName;
        student_num_container.innerText = stdNum ;
        student_data.appendChild(student_name_container);
        student_data.appendChild( student_num_container);
        container.appendChild(student_data);

    }else if(check == "false"){
        
        container.innerHTML= "";
        // console.log(container.innerHTML);
    }
})
btn2.addEventListener('click',()=>{
    // const addToggle = btnClasses.toggle('open');
    // const check = addToggle ? "true":"false";
    // // console.log(check)
    // const student_data = document.createElement('div');
    // const student_name_container = document.createElement('h3');
    // const student_num_container = document.createElement('p');
    // if(check == "true"){
    //     student_name_container.innerText = stdName;
    //     student_num_container.innerText = stdNum ;
    //     student_data.appendChild(student_name_container);
    //     student_data.appendChild( student_num_container);
    //     container.appendChild(student_data);

    // }else if(check == "false"){
        
    //     container.innerHTML= "";
        // console.log(container.innerHTML);
    // }
})
// in indexing arrays or other collection types; the first value in the has an index of 0, second has index 1 etc
let myKyat = 'cat';
let myChar = myKyat.charAt(0);
// myKyat[0] = ' j';
myChar = myKyat[0];
// console.log(myKyat);

let myStr2 = 'This is Javascript Code'

let ascr = myStr2.slice(11,15)

<<<<<<< HEAD
<<<<<<< HEAD
console.log(ascr )
>>>>>>> 47d0aa869fc65736d2ee7f833681d26da9157c2c
=======
console.log(ascr )
>>>>>>> master
