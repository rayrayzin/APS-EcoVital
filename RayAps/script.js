// Menu hamburguer
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideContainer = document.getElementById('slides');
const dotsContainer = document.getElementById('carousel-dots');

// Criar dots
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('span');

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

function moveSlide(step) {
  slideIndex += step;
  showSlide(slideIndex);
}

setInterval(() => {
  moveSlide(1);
}, 5000);

showSlide(slideIndex);

document.addEventListener('DOMContentLoaded', function() {
  // Menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');
  const closeBtn = document.querySelector('.close-btn');

  menuToggle.addEventListener('click', function() {
      sideMenu.classList.add('open');
  });

  closeBtn.addEventListener('click', function() {
      sideMenu.classList.remove('open');
  });

  // Fechar menu ao clicar em um link
  const menuLinks = document.querySelectorAll('.side-menu a');
  menuLinks.forEach(link => {
      link.addEventListener('click', function() {
          sideMenu.classList.remove('open');
      });
  });

  // Filtros de notícias
  const filtroBtns = document.querySelectorAll('.filtro-btn');
  filtroBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          filtroBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          // Aqui você pode adicionar a lógica para filtrar as notícias
      });
  });

  // Paginação
  const paginaBtns = document.querySelectorAll('.pagina-btn');
  paginaBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          if (!this.classList.contains('active')) {
              document.querySelector('.pagina-btn.active').classList.remove('active');
              this.classList.add('active');
              // Aqui você pode adicionar a lógica para carregar a página selecionada
          }
      });
  });

  // Efeito hover nos cards
  const cards = document.querySelectorAll('.noticia-card');
  cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.querySelector('.btn-leia-mais').style.backgroundColor = '#5a724c';
      });
      
      card.addEventListener('mouseleave', function() {
          this.querySelector('.btn-leia-mais').style.backgroundColor = '#6e8c5f';
      });
  });
});