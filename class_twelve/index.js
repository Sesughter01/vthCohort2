
function displayDate(){
    document.getElementById('text').innerHTML=Date();
   }

const btn = document.querySelector("#color_btn");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }
const random = (number)=>{
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});