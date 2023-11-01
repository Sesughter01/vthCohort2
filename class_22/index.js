let y = window.innerHeight;
let x = window.innerWidth;

let y2 = screen.height;
let x2 =screen.width;

const myLocation = window.location.href
// alert(y2)
// alert(myLocation)




function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }
}
