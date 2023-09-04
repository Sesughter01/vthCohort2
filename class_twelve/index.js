
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

=======
 element.style.transform = "translateX(0%)";
>>>>>>> master
const span = document.querySelector('.select');
const classes = span.classList;

span.addEventListener('click',()=>{

   const result = classes.toggle('c');
<<<<<<< HEAD
  //  span.textContent = `'c' ${

  //    result ? "added" : "removed"
  //  }; classlist is now "${classes}".`
=======
   span.textContent = `'c' ${

     result ? "added" : "removed"
   }; classlist is now "${classes}".`
>>>>>>> master
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