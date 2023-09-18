const container = document.querySelector('.display')
const p = document.querySelector('.demo');
const p1 = document.querySelector('.demo2');
let acct_bal = 12000.167543;
const roundedBal = Math.round(acct_bal);
const myPi = Math.PI;
const roundedPi = myPi.toFixed(3);
const newPara = document.createElement('p');
const rand = Math.random() * 100
let todayDate = new Date();
let text = "";
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
    newPara.style.backgroundColor = 'green';
}else if(typeof(toString(todayDate)) == typeof("string")){
    newPara.style.backgroundColor = 'blue';
}else{
    newPara.style.backgroundColor = 'red';
}

// for(let i = 0;i<2;i++){
   
//     console.log(i)
// }

let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for (let i = 0; i < week.length; i++) {
  p1.innerHTML +=`${week[i]}  <br>`
  text = week[i] +"<br>";
  // container.append(week[i])
}

