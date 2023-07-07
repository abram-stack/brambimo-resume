
// function to show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle','nav-menu')


// REMOVE MENU(in Mobile), WHEN TAB IS CLICKED
// 1. loop finde elemente navlink
// 2. clicked
// 3. element navmenu -> classList.remove class: show-menu
const navLink = document.querySelectorAll('.nav--link')

function removeMenu() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', removeMenu))


// // ACTIVE LINK
// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//   const scrollY = window.pageYOffset

//   sections.forEach(current => { 
//     const sectionHeight = current.offsetHeight
//   })
// }

// SHOW SCROLL
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  // when the scroll > 200 Viewport height, add show-scroll class
  if (this.scrollY >= 200)
    scrollTop.classList.add('show-scroll')
  else
    scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollTop)


// DARK LIGHT THEME

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// get previously selected
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//to get the current theme, validate the class in html if darktheme is selected,
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


//function to add reducing the size and print A4
function scaleCv() {
  document.body.classList.add('scale-cv')
}

// remove the size when cs is downloaded
function removeScale() {
  document.body.classList.remove('scale-cv')
}

// for generated pdf
let areaCv = document.getElementById('area-cv')
let resumeButton = document.getElementById('resume-button')


let opt = {
  margin:       0,
  filename:     'myResume.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 4 },
  jsPDF:        { format: 'a4', orientation: 'portrait' }
};

// function to call areaCv and html2pdf
function generateResume() {
  html2pdf(areaCv, opt)
}


resumeButton.addEventListener('click', () => {
  // 1.scale down
  // 2.generate resume
  // 3.rescale
  scaleCv();
  generateResume()
  setTimeout(removeScale, 5000 )
})