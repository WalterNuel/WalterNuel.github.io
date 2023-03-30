const navBtn = document.querySelector(".side-nav-btn")
const sideNav = document.querySelector(".side-nav")

const sideNavWithin = document.querySelector(".side-ops")

const options = document.querySelectorAll('.options li')
const linkList = document.querySelectorAll('.side-ops li')


const alertBtn = document.querySelector('.btn')
const alertDiv = document.querySelector('.alert')


alertBtn.addEventListener('click', () => {
  alertDiv.classList.add('out')
})


function checkList() {
  if (navBtn.classList.contains('clicked')) {
    navBtn.classList.remove('clicked');
    sideNav.classList.remove("show");
  } else {
    navBtn.classList.add('clicked');
    sideNav.classList.add("show");
  }
}

function oppOrOne(opp, one) {
  opp.classList.remove('active');
  one.classList.add('active')
}



navBtn.addEventListener('click', () => {
  checkList()
})


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


linkList.forEach((one) => {
  one.addEventListener('click', () => {
    checkList()
  })
});


window.addEventListener("scroll", function() {
  var navBar = document.querySelector(".nav");
  var firstBan = document.querySelector(".one")
  navBar.classList.toggle("sticky", window.scrollY > firstBan.scrollHeight);
})

