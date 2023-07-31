
var navBar = document.querySelector(".nav");
var firstBan = document.querySelector(".one")
// Here we get all of the mobile nav buttons 

// First we get the button to make it show
const navBtn = document.querySelector(".side-nav-btn")
// This is for the entire mobile nav
const sideNav = document.querySelector(".side-nav")
// This is for the list/buttons within the side nav
const sideNavWithin = document.querySelector(".side-ops")

//This is for the list we have in the desktop screen navigation
const options = document.querySelectorAll('.options li')
const linkList = document.querySelectorAll('.side-ops li')

// And this is just for alerting the visitor that the site is currently incomplete
const alertBtn = document.querySelector('.btn')
const alertDiv = document.querySelector('.alert')

const mainBody = document.querySelector('body')


if (alertDiv.classList.contains('out')) {
} else {
  mainBody.style.overflowY = 'hidden'
}

alertBtn.addEventListener('click', () => {
  alertDiv.classList.add('out')
  mainBody.style.overflowY = 'auto'
})


// Here we have a function to check if th user wants to use the mobile/side navigation
function checkList() {
  if (navBtn.classList.contains('clicked')) {
    navBtn.classList.remove('clicked');
    sideNav.classList.remove("show");
    mainBody.style.overflowY = 'auto';
  } else {
    navBtn.classList.add('clicked');
    sideNav.classList.add("show");
    mainBody.style.overflowY = 'hidden';
  }
}


// Function that gives element in the desktop navigation their active indicator(fancy for adds 'active' to the class name)
function oppOrOne(opp, one) {
  opp.classList.remove('active');
  one.classList.add('active')
}

//  Just the checkList function being called cause I was having Big Brain Time😅
navBtn.addEventListener('click', () => {
  checkList()
})

// Here we loop through all of our nav buttons and give the active indicator if clicked
// options.forEach((one) => {
//   one.addEventListener('click', () => {
//     if (one.classList.contains('active')) {
//       return null
//     } else {
//       options.forEach((opp) => {
//         if (opp.classList.contains('active')) {
//           opp === one ? null : oppOrOne(opp, one)
//         }
//       })
//     }
//   })
// })

// This calls the checkList function after a button in the mobile nav is clicked
linkList.forEach((one) => {
  one.addEventListener('click', () => {
    checkList()
  })
});

// Basic code for sticky topNav
window.addEventListener("scroll", function() {
  navBar.classList.toggle("sticky", window.scrollY > firstBan.scrollHeight);
})



//Handling the colors
//Get each element
const lightBtn = document.getElementById('light')
const darkBtn = document.getElementById('dark')
const dimBtn = document.getElementById('dim')


const bannerContent = document.querySelectorAll('.banner')

function dimStyled(element, variable) {
  element.forEach(e => {
    e.style.backgroundColor = `var(${variable})`;
  });
}


darkBtn.addEventListener('click', () => {
  console.log('Dark theme selected')
  var mainStyle = '--main-theme';
  bannerContent.forEach(e => {
    e.style.backgroundColor = `var(${mainStyle})`;
  });
})

dimBtn.addEventListener('click', () => {
  console.log('Dim theme selected')
  var mainStyle = '--main-theme3';
  bannerContent.forEach(e => {
    e.style.backgroundColor = `var(${mainStyle})`;
  });
})

const btnCode = document.querySelectorAll(".github-code button")

btnCode.forEach(element => {
  const btnChild = element.lastElementChild
  
  element.addEventListener('mouseenter', () => {
    btnChild.classList.add("active")
    console.log('I WORK MFS!')
  })

  element.addEventListener('mouseleave', () => {
    btnChild.classList.remove("active")
    console.log('I WORK MFS!')
  })
});

const mediaScreen = document.getElementById('images-vids');
const mediaContain = document.getElementById('media-contained');
const mediaCancelBtn = document.getElementById('media-cancel');


//insertmemo demo video
// let memoElement;
// memoElement = document.createElement("video");
// memoElement.setAttribute("controls", '');
// memoElement.setAttribute("autoplay", true);
// memoElement.controls = true;
// memoElement.src = `videos/${memo}/${memo}_demo.mp4`; // Set the image source
// memoElement.alt = "Demo for Memo"; 

// let memoElement;
// memoElement = document.createElement("video");
// memoElement.setAttribute("controls", '');
// memoElement.setAttribute("autoplay", true);
// memoElement.controls = true;
// memoElement.src = "videos/memo/memo_demo.mp4"; // Set the image source
// memoElement.alt = "Demo for Memo"; 


function playMedia(params) {
  mediaScreen.classList.add('active')

  var name = `${params}`

  let mediaSource;
  mediaSource = document.createElement("video");
  mediaSource.setAttribute("controls", '');
  mediaSource.setAttribute("autoplay", true);
  mediaSource.controls = true;
  mediaSource.id = 'media_main_contained'
  // mediaSource.src = `videos/${params}/${params}_demo.mp4`; // Set the image source
  // mediaSource.alt = `Demo for ${params}`; 
  mediaSource.src = "videos/" + name + "/" + name + "_demo.mp4"; // Set the image source
  mediaSource.alt = "Demo for" + name; 


  mediaContain.appendChild(mediaSource)
  navBar.classList.add('blind')
  
  mainBody.style.overflowY = 'hidden'
}

function cancelClicked() {
  mainBody.style.overflowY = 'auto'
  mediaScreen.classList.remove('active')
  navBar.classList.remove('blind')
  const childElement = document.getElementById('media_main_contained');
  if (childElement) {
    mediaContain.removeChild(childElement);
  }
}

mediaCancelBtn.addEventListener('click', cancelClicked);