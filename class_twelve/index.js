
function displayDate(){
    document.getElementById('text').innerHTML=Date();
   }

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});


const commt = null

if (commit){
  console.log("true")
}

 else{
  console.log("false")
}