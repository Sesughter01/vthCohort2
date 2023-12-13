// create javascript code here
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;
console.log(y)
// const man=document.forms["myForm"]
// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
    // alert("Name must be filled out");
    // return false;
//   }
  
// }
alert(typeof(man)) 
document.getElementById("id03").innerHTML = 
document.getElementById("id01").innerHTML;
const h1 = document.createElement("h1");
const node = document.createTextNode("This is new.");
h1.append(node);

const element = document.getElementById("div1");
element.append(h1);
let mybody = document.getElementsByTagName(body)
let newbody = document.getElementById(div1).childNodes
 console.log(body)
 console.log(newbody)