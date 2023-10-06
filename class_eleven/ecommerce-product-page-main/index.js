// function navElements
const menuBar = document.getElementById('JS_menuBar');
let menu2 = document.querySelector('.navbar');


function displayNavbar() {
    menu2.style.transform = 'translateX(0)';
}

const toggleDisplay = menuBar.classList

menuBar.addEventListener ('click', ()=>{
    let displayNav = toggleDisplay.toggle('is-active');
    if (displayNav) {
        displayNavbar();
    } else {
        menu2.style.transform = '';
    }
    
})


