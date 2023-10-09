const container = document.querySelector('.display')
const p = document.querySelector('.demo');
<<<<<<< HEAD
<<<<<<< HEAD
const p1 = document.querySelector('demo2')
=======
>>>>>>> master
=======
>>>>>>> master
let acct_bal = 12000.167543;
const roundedBal = Math.round(acct_bal);
const myPi = Math.PI;
const roundedPi = myPi.toFixed(3);
const newPara = document.createElement('p');
const rand = Math.random() * 100
let todayDate = new Date();
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

for(let i = 0;i<2;i++){
   
    console.log(i)
<<<<<<< HEAD
<<<<<<< HEAD
}

// let text = todayday

// text += day[Sunday] + "</br>"
// text += day[Monday] + "</br>"
// text += day[Tuesday] + "</br>"
// text += day[Wednesday] + "</br>"
// text += day[Thursday] + "</br>"
// text += day[Friday] + "</br>"
// text += day[Saturday] + "</br>"

let week = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday & Saturday"];

for (let i = 0; i < week.length; i++) {
  console.log(i)

  container.append(week[i]);

}
=======
}
>>>>>>> master
=======
}
>>>>>>> master
