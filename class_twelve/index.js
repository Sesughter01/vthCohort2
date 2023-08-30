
function displayDate(){
    document.getElementById('text').innerHTML=Date();
   }

const btn = document.querySelector("#color_btn");

function random(num, ) {
  return Math.floor(Math.random() * (num + 1));
}

// Callback function is ?
btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

