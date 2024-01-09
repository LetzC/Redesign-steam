const menuBurger = document.querySelector('.menu__burger')
const navLinks = document.querySelector('.links__mobile')
const radio = document.querySelector('.manual__btn')

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

let cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
  nextImg()
}, 5000)

function nextImg() {
  cont++

  if (cont > 4) {
    cont = 1
  }

  document.getElementById(`radio${cont}`).checked = true
}

document.querySelectorAll('a').forEach(function (anchor) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
  });
});