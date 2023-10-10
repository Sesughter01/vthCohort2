var app = document.getElementById('App');
// function toggleMenu(x) {
//   x.classList.toggle("change");
// }
// onclick="toggleMenu(this)"
// var template = `
// <nav>



// <div class="ham-menu" >
//         <div class="ham">About</div>
//         <div class="ham">Careers</div>
//         <div class="ham">Events</div>
//         <div class="ham">Products</div>
//         <div class="ham">Support</div>
// <nav>

// <nav>
// <a href="#">About</a>
// <a href="#">Careers</a>
// <a href="#">Events</a>
// <a href="#">Products</a>
// <a href="#">Supportsz</a>


// <nav>
// `

// app.innerHTML = template;


// var nav = `
//   <nav>
//   <div> Loopstudios </div>
//   <ul>
//     <li><a href = "#"> Home </a></li>
//     <li><a href = "#"> Home </a></li>
//     <li><a href = "#"> Home </a></li>
//     <li><a href = "#"> Home </a></li>
//   </ul>
//   </nav>

  
// `

// var header =document.createElement('header');
// var box = document.createElement('h1')
// box.className = 'box'
// box.innerHTML = `
//   IMMERSIVE EXPERIENCES THAT DELIVER
// `
// var nav = document.createElement('nav');
// var div = document.createElement('div')
// div.innerHTML = "loopstudios"
// var ul = document.createElement('ul')
// ul.innerHTML = `
// <li><a href = "#"> About </a></li>
//     <li><a href = "#"> Career </a></li>
//     <li><a href = "#"> Events </a></li>
//     <li><a href = "#"> Products</a></li>
//     <li><a href = "#"> Supports</a></li>
// `
// header.appendChild(nav)
// header.appendChild(box)
// nav.appendChild(div)
// nav.appendChild(ul)

var app = document.getElementById("App");

var parentContainer = document.createElement("div");
var header = document.createElement("header");
header.className = "header";

var nav = document.createElement("nav");
var logo = document.createElement("h1");
logo.innerText = "LoopStudio";
var ul = document.createElement("ul");
ul.className = "nav-items";
var hamburger = document.createElement('img');
hamburger.id = "hamburger"
hamburger.className= "hamburger"
hamburger.src = "./frontendMentorDocs/loopstudios-landing-page-main/images/icon-hamburger.svg"
// desktop navlinks
var navLinks = `
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Support</a></li>
    `;

    // mobile nav links
    var mb = document.createElement('div')
    mb.id = "mobile-items"
    mb.className = "mobile-items"
  var mobileNavItems = `
  
  <div > 
  <div class ="m-flex"> 
  <h1>Loopstudio</h1>
  <img id="close" src ="./frontendMentorDocs/loopstudios-landing-page-main/images/icon-close.svg">
  </div>
  <ul>
    <li><a href="#">About</a></li>
    <li><a href="#">Careers</a></li>
    <li><a href="#">Events</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Support</a></li>
  </ul>
  <div> 
  `
  mb.innerHTML =mobileNavItems;

ul.innerHTML = navLinks;
nav.append(logo);
nav.append(ul);
nav.append(mb)
nav.append(hamburger);
var headertext = document.createElement("h1");
headertext.className = "bannertext";
headertext.innerText = "IMMERSIVE EXPERIENCES THAT DELIVER";
header.append(nav);
header.append(headertext);

// About section

var abSection = document.createElement("section");
abSection.className = "abSection";
var img = document.createElement("img");
img.src =
  "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-interactive.jpg";
var abRightCont = document.createElement("div");
abRightCont.className = "right-cont";

var abRighth1 = document.createElement("h1");
abRighth1.innerText = "The Leader In Interactive Vr";
var abRightp = document.createElement("p");
abRightp.innerText = "The Leader In Interactive Vr";

abRightCont.append(abRighth1);
abRightCont.append(abRightp);

abSection.append(img);
abSection.append(abRightCont);

// Creation section

var creationSection = document.createElement("section");
var cHeader = document.createElement("div");
cHeader.className = "flex"
var cHeaderL = document.createElement('h1')
cHeaderL.innerText = "Our Creation"
var cHeaderR = document.createElement('button')
cHeaderR.innerText = "See all"

cHeader.append(cHeaderL)
cHeader.append(cHeaderR)

var gallery = document.createElement("div");
gallery.className = "gallery"

// Gallery image source

var imgSrcPath = [
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-night-arcade.jpg", 
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-pocket-borealis.jpg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-curiosity.jpg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-deep-earth.jpg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-fisheye.jpg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-from-above.jpg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-grid.jpg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-soccer-team.jpg"

]
let imgII = ``
for (let i = 0; i < imgSrcPath.length; i++) {
    imgII += `<img src="${imgSrcPath[i]}">`;
  }

var imgI = document.createElement("div")
imgI.className = "flexII"
imgI.innerHTML = imgII
creationSection.append(cHeader)
creationSection.append(imgI);

// Footer
var footer = document.createElement("footer")

var fcomponent = `
  <div>
    <h1>loopstudios</h1>
    <ul>
        <li>About<li>
        <li>Careers<li>
        <li>Events<li>
        <li>Products<li>
        <li>Supports<li>
    </ul>
  </div>
  <div>
    <h1>loopstudios</h1>
    <p>2023 | Loopstudios. All rights reserved</p>
  </div>
`
footer.innerHTML = fcomponent


// Components
parentContainer.appendChild(header);
parentContainer.appendChild(abSection);
parentContainer.appendChild(creationSection);
parentContainer.appendChild(footer);

app.append(parentContainer);



// hamburger logc

var menu = document.getElementById('hamburger');
var close = document.getElementById('close');
var mNavItems = document.getElementById('mobile-items');

menu.addEventListener('click',()=>{
  mNavItems.classList.toggle("active")
  // mNavItems.style.background = "red"
  // alert(mNavItems)

})
close.addEventListener('click',()=>{
  mNavItems.classList.remove("active")
  // mNavItems.style.background = "red"
  // alert(mNavItems)

})