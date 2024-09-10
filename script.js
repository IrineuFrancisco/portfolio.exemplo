const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showItem(index) {
  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Inicializa o carrossel com o primeiro item ativo
showItem(currentIndex);