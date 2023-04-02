
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

alertBtn.addEventListener('click', () => {
  alertDiv.classList.add('out')
})


// Here we have a function to check if th user wants to use the mobile/side navigation
function checkList() {
  if (navBtn.classList.contains('clicked')) {
    navBtn.classList.remove('clicked');
    sideNav.classList.remove("show");
  } else {
    navBtn.classList.add('clicked');
    sideNav.classList.add("show");
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
options.forEach((one) => {
  one.addEventListener('click', () => {
    if (one.classList.contains('active')) {
      return null
    } else {
      options.forEach((opp) => {
        if (opp.classList.contains('active')) {
          opp === one ? null : oppOrOne(opp, one)
        }
      })
    }
  })
})

// This calls the checkList function after a button in the mobile nav is clicked
linkList.forEach((one) => {
  one.addEventListener('click', () => {
    checkList()
  })
});

// Basic code for sticky topNav
window.addEventListener("scroll", function() {
  var navBar = document.querySelector(".nav");
  var firstBan = document.querySelector(".one")
  navBar.classList.toggle("sticky", window.scrollY > firstBan.scrollHeight);
})

