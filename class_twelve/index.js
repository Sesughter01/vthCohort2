
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

 element.style.transform = "translateX(0%)";
const span = document.querySelector('.select');
const classes = span.classList;

span.addEventListener('click',()=>{

   const result = classes.toggle('c');
   span.textContent = `'c' ${

     result ? "added" : "removed"
   }; classlist is now "${classes}".`
})

/**
 * 
 * 
 *   function nameOfFunctn(){
 *     do somethng
 * }
 * 
 * Arrow function
 * 
 *   ()=>{
 *    do somethng 
 * }


 */