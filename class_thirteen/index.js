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


// Get Student Name and Number
const stdName = student.getName();
const stdNum = student.getNum();

// Create New Student
const StdNameDetails = student.setName('Boluwatife');
const StdNumDetails = student.setNum(54321);
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
        student_name_container.innerText = StdNameDetails;
        student_num_container.innerText = StdNumDetails ;
        student_data.appendChild(student_name_container);
        student_data.appendChild( student_num_container);
        container.appendChild(student_data);

    }else if(check == "false"){
        
        container.innerHTML= "";
        // console.log(container.innerHTML);
    }
})


btn2.addEventListener('click',()=>{
    const addToggle = btnClasses.toggle('open');
    const check = addToggle ? "true":"false";
    // console.log(check)
    const student_data = document.createElement('div');
    const student_name_container = document.createElement('h3');
    const student_num_container = document.createElement('p');
    if(check == "true"){
        student_name_container.innerText = stdName;
        student_num_container.innerText = stdNum;
        student_data.appendChild(student_name_container);
        student_data.appendChild( student_num_container);
        container.appendChild(student_data);

    }else if(check == "false"){
        
        container.innerHTML= "";
        // console.log(container.innerHTML);
    }
})