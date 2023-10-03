// function navElements
const menu = document.getElementById('JS_Menu');
let menu2 = document.querySelector('.navbar')

function displayNavbar () {
    menu2.style.transform = 'translateX(0)'
}

const toggleDisplay = menu.classList

menu.addEventListener ( 'click', ()=>{
    const displayNav = toggleDisplay.toggle('select');
    if (displayNav) {
        displayNavbar ();
    } else {
        menu2.style.transform = '';
    }
    
})





