// Show menu
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = deocument.getElementById('nav-close');

// Menu show
/* Validate if constant exists */

if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

//Menu Hidden (Validate if constant exists)

if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

//Remove menu mobile

const navLink = document.querySelectorAll('.nav__link');
const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')

  // when we click on each nav__link, we remove the show-menu class

  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction));

// Change Background Header

const scrollHeader = () => {
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50? header.classList.add('bg-header')       
                    : header.classList.remove('bg-header')

}
window.addEventListener('scroll',scrollHeader)

// Show scroll up

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')

  // When the scroll is higher than 350 viewport height, add the show-scrol class to the a tag with the scroll-up class

  this.scrollY >= 50? scrollUp.classList.add('show-scroll')       
                    : scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp);

// Scroll Sections Active Link

const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
  const scrollY = window.pageYOffset
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop-58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav-menu a [href*=' + sectionId + ']')
    
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    } else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll',scrollActive);




