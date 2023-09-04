const btn=document.querySelector('#navlist')

const container=document.getElementById('navnav')
const btnClasses="navlink"; btn.classList= "navlist";



btn.addEventListener('click',()=>{
    const connect=btnClasses.toggle('c')
 
    if(connect){
       container.innerHTML= navlist()
    }

    else{
        container.innerHTML=""
    }


})  