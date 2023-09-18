const container = document.querySelector('.display')
const p = document.querySelector('.demo');
const para = document.querySelector('.demo2');
let acct_bal = 12000.167543;
const roundedBal = Math.round(acct_bal);
const myPi = Math.PI;
const roundedPi = myPi.toFixed(3);
const newPara = document.createElement('p');
const rand = Math.random() * 100;
let todayDate = new Date();
let eachDay = '';
p.innerHTML = `${roundedBal} <br>`
p.append(roundedPi)
newPara.innerText = rand;
container.appendChild(newPara);

let x = "0";
switch (x) {
  case 0:
    // text = "Off";
    // alert( text)
    break;
  case 1:
    text = "On";
    // alert( text)
    break;
  default:
    text = "No value found";
    // alert( text)
}


if(todayDate == "str"){
    // newPara.style.backgroundColor = 'green';
}else if(typeof(toString(todayDate)) == typeof("string")){
     newPara.style.backgroundColor = '#54B4D3';
}else{
    // newPara.style.backgroundColor = 'red';
}

for(let i = 0;i<2;i++){
   
    console.log(i)
}


// let daysOfWeek = {
//   day_1:'Monday',
//   day_2:'Tuesday',
//   day_3:'Wednesday',
//   day_4:'Thursday',
//   day_5:'Friday',
//   day_6:'Saturday',
//   day_7:'Sunday',
// };


let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (i = 0; i < daysOfWeek.length; i++) {
      para.innerHTML += `${daysOfWeek[i]} <br>`;
      // console.log(daysOfWeek[i]);
      // eachDay = newPara;
        // container.append(daysOfWeek[i]);
    }

