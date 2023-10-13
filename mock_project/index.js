// Variable declaration to store the creation of different html elements
const body = document.getElementById("App");

let container = document.createElement("div");
let header = document.createElement("header");
header.className = "headerOne";

// Navigation elements markup
let nav = document.createElement("nav");
const logo = document.createElement("img");
logo.className = 'logoImg'
logo.src = "/mock_project/frontendMentorDocs/loopstudios-landing-page-main/images/logo.svg";
const navItems = document.createElement("ul");
navItems.className = "nav_items";

const nav_Links = `
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Support</a></li>
    `;
navItems.innerHTML = nav_Links;
nav.append(logo);
nav.append(navItems);
let headertext = document.createElement("h1");
headertext.className = "headerText";
headertext.innerText = "IMMERSIVE \n EXPERIENCES \n THAT  DELIVER";
header.append(nav);
header.append(headertext);

// Markup for the body section

let bodySection = document.createElement("section");
bodySection.className = "bodyContainer";
let img = document.createElement("img");
img.className = 'sectionImage'
img.src =
"/mock_project/frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-interactive.jpg";
let bodyContentOne = document.createElement("div");
bodyContentOne.className = "sectionOne";

let sectionHeader = document.createElement("h2");
sectionHeader.className = 'sectionHeader'
sectionHeader.innerText = "THE LEADER IN \n INTERACTIVE VR";
let sectionPara = document.createElement("p");
sectionPara.innerText = `Founded in 2011, Loopstudios has been producing world-class\n virtual reality projects for some of the best companies around the \n globe. Our award-winning creations have transformed \n businesses through digital experiences that bind to their brand.`;

bodyContentOne.append(sectionHeader);
bodyContentOne.append(sectionPara);

bodySection.append(img);
bodySection.append(bodyContentOne);

// MarkUp for the second section of the body

let secondSection = document.createElement("section");
let containerOne = document.createElement("div");
containerOne.className = "boxOne"
let subContainer = document.createElement('h2')
subContainer.className = 'sectionSubHeader'
subContainer.textContent = "OUR CREATION"
let button = document.createElement('button')
button.textContent = "SEE ALL"

containerOne.append(subContainer)
containerOne.append(button)

let imageContainer = document.createElement("div");
imageContainer.className = "image_array"

// An array with a for loop to hold and iterate all the images in the container 

let imageArr = [
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-night-arcade.jpg", 
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-pocket-borealis.jpg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-curiosity.jpg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-deep-earth.jpg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-fisheye.jpg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-from-above.jpg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-grid.jpg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/desktop/image-soccer-team.jpg"
]

// This empty backticks will store all the image after running through the loop

let imageHolder = ``
for (let i = 0; i < imageArr.length; i += 1) {
    imageHolder += `<img src="${imageArr[i]}">`;
  }


let imageDisplay = document.createElement("div")
imageDisplay.className = "imageBox"
imageDisplay.innerHTML = imageHolder
secondSection.append(containerOne)
secondSection.append(imageDisplay);

// Markup for the footer
let footerSection = document.createElement("footer");
footerSection.className = 'footerSection'
let footerContainer = document.createElement("div");
footerContainer.className = 'footerContainer';

let footerItems = document.createElement('div');
footerItems.className = 'footerItemOne';

let footLogo = document.createElement("div");
const logoTwo = document.createElement("img");
logoTwo.className = 'logoImg'
logoTwo.src = "/mock_project/frontendMentorDocs/loopstudios-landing-page-main/images/logo.svg";

footLogo.append(logoTwo)

let footerNav = document.createElement('div');
footerNav.className = 'footerNav';
let footNav = document.createElement("nav");
const navItemsTwo = document.createElement("ul");
navItemsTwo.className = "nav_items";

const nav_LinksTwo = `
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Support</a></li>
    `;
navItemsTwo.innerHTML = nav_Links;

footNav.append(navItemsTwo)
footerNav.append(footNav)

footerItems.append(footLogo)
footerItems.append(footerNav)

let footerItemsTwo = document.createElement('div');
footerItemsTwo.className = 'footerItemTwo';

let footerSocials = document.createElement('div');
footerSocials.className = 'footerArraySocials';

// An array with a for loop to hold and iterate all the socials logo in the footer container 

let socialArr = [
    "./frontendMentorDocs/loopstudios-landing-page-main/images/icon-twitter.svg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/icon-instagram.svg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/icon-pinterest.svg",
    "./frontendMentorDocs/loopstudios-landing-page-main/images/icon-facebook.svg"
]

// This empty backticks will store all the image after running through the loop

let socialHolder = ``
for (let i = 0; i < socialArr.length; i += 1) {
  socialHolder += `<img src="${socialArr[i]}">`;
  }

let socials = document.createElement("div")
socials.className = "social"
socials.innerHTML = socialHolder
footerSocials.append(socials);

footerItemsTwo.append(footerSocials)
let footerCopy = document.createElement('div');
footerCopy.className = 'footerCopyRight';
let footerPara = document.createElement('p');
footerPara.innerText = '© 2021 Loopstudios. All rights reserved.'

footerCopy.append(footerPara)

footerItemsTwo.append(footerCopy)

footerSection.append(footerItems);
footerSection.append(footerItemsTwo);

  // Font style markup for every html elements in this landing page
  let style = document.createElement('style');
  style.innerHTML = `
      @font-face {
          font-family: 'Josefin Sans', sans-serif;
          font-family: 'Alata', sans-serif;
          src: url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
          src: url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
      }
      h1, h2, button {
      font-family: 'Josefin Sans', sans-serif;
      }

      p, li, ul {
        font-family: 'Alata', sans-serif;
      }
  `

  container.appendChild(header);
  container.appendChild(bodySection);
  container.appendChild(secondSection);
  container.appendChild(footerSection);
  document.head.appendChild(style);
  
  body.append(container);
  
  
  
  