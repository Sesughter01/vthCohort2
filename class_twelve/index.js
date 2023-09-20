
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
 element.style.transform = "translateX(0%)";
>>>>>>> ef2805fd7ffaf273252add4e7c7d206b584cb132
=======
 element.style.transform = "translateX(0%)";
>>>>>>> 47d0aa869fc65736d2ee7f833681d26da9157c2c
=======
 element.style.transform = "translateX(0%)";
>>>>>>> dbba3aeb16c6b12588a661b79045c69337e391d8
=======
 element.style.transform = "translateX(0%)";
>>>>>>> ab590b780c2f075ad321eaf9c97395849d8d3069
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