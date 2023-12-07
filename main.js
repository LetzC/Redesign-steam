const menuBurger = document.querySelector('.menu__burger')
const navLinks = document.querySelector('.links__mobile')

menuBurger.addEventListener('click', menuShow)

function menuShow() {
  if (navLinks.classList.contains('open')) {
    navLinks.classList.remove('open')
    document.querySelector('.menu__icon').src = 'icons/burger-menu-svgrepo-com.svg'
    document.querySelector('.menu__icon').style.height = '100%';
  } else {
    navLinks.classList.add('open')
    document.querySelector('.menu__icon').src = 'icons/close-svgrepo-com.svg'
    document.querySelector('.menu__icon').style.height = '28px';
  }
}

console.log(navLinks)
console.log(menuBurger)