// Declaration of variables, header element, navlinks, logo
var app = document.getElementById("App");

var parentContainer = document.createElement("div");
var header = document.createElement("header");
header.className = "header";

var nav = document.createElement("nav");
var logo = document.createElement("h1");
logo.innerText = "LoopStudio";
var ul = document.createElement("ul");
ul.className = "nav-items";

var navLinks = `
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Support</a></li>
    `;
ul.innerHTML = navLinks;
nav.append(logo);
nav.append(ul);
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
abRightp.innerText = "Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.";

abRightCont.append(abRighth1);
abRightCont.append(abRightp);

abSection.append(img);
abSection.append(abRightCont);


// Creation section comprising of the div, display property and button

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


// All Images source

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


// Components (header,about section, creation section and footer)
parentContainer.appendChild(header);
parentContainer.appendChild(abSection);
parentContainer.appendChild(creationSection);
parentContainer.appendChild(footer);

app.append(parentContainer);