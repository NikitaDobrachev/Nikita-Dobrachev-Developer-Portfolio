window.addEventListener('scroll', onScroll);

onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  if (window.scrollY > 0) {
    document.getElementById('navigation').classList.add('scroll')
  } else {
    document.getElementById('navigation').classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll() {
  if (window.scrollY > 550) {
    document.getElementById('backToTopButton').classList.add('show')
  } else {
    document.getElementById('backToTopButton').classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #contact,
  #contact header,
  #contact .content`);