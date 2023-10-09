
const container = document.querySelector('.container');
const para = document.createElement('p');
const heading = document.createElement('h3');

const person = {fname:"John", lname:"Doe", age:25};

//  FOR IN LOOPS

let text = "";
for (let y in person) {
  text += `${person[y]} <br>`;
  container.innerHTML = text;
}

//  FOR OF LOOPS

let language = "JavaScript";

let text2 = "";
for (let okpe of language) {
    if( okpe == "S"){
        continue;
    }
    text2 += `${okpe} <br>`;
    para.innerHTML = text2 ;
}
container.appendChild(para);


// WHILE LOOPS 

let text3 = [];
let t = 0;

while(t < 15){

    // if(t==3){
    //     // continue;
    // }
  
  let myLength =  text3.push(`number is ${t}`);
  heading.innerHTML = myLength

    t++;
}
console.log(text3);
document.getElementById('demo').innerHTML = text3;
container.appendChild(heading);

//  CREATING SETS 
let text4 = '';
const myArray = [1,2,3,4,5];

const myset = new Set(myArray)

myset.add(6);
myset.add(7);
myset.add(7);
myset.add(9);
for (const v of myset.values()){
   text4 += v;
}
alert(text4);