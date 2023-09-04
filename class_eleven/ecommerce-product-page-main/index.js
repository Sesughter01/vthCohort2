// function navElements
const btn = document.querySelector('.menuContainer');
const  navElements = document.querySelector('.navList')

const Elmnts = btn.classList

btn.addEventListener ( 'click', ()=>{
    const outcome = Elmnts.toggle('select')
    document.menuContainer.style.transform = translateX(0%);
}
    
)





