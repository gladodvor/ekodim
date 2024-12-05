//
// Получаем элементы для модального окна
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const photos = document.querySelectorAll(".photo");

// Открытие модального окна при клике на слайд
photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    modal.style.display = "flex"; // Показываем модальное окно
    modalImage.src = photo.src; // Устанавливаем выбранное фото в модалку
  });
});

// Закрытие модального окна
closeModal.addEventListener("click", () => {
  modal.style.display = "none"; // Скрываем модальное окно
});

// Закрытие модального окна при клике вне изображения
modal.addEventListener("click", (e) => {
  if (e.target !== modalImage) {
    modal.style.display = "none"; // Скрываем модальное окно
  }
});

// _________________________________ carousel _____________;
// Получаем элементы для слайдера
const track = document.querySelector(".slider-track");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Параметры слайдера
const slidesToShow = 3; // Количество видимых слайдов
const slidesToScroll = 1; // Количество слайдов для прокрутки
let currentIndex = 0; // Текущая позиция

// Вычисляем ширину каждого слайда и трека
function updateSlider() {
  const slideWidth = track.clientWidth / slidesToShow;
  slides.forEach((slide) => {
    slide.style.width = `${slideWidth}px`;
  });
  moveSlider();
}

// Функция перемещения трека
function moveSlider() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // Управляем состоянием кнопок
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex >= slides.length - slidesToShow;
}

// Обработчики кнопок
nextButton.addEventListener("click", () => {
  if (currentIndex < slides.length - slidesToShow) {
    currentIndex += slidesToScroll;
    moveSlider();
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= slidesToScroll;
    moveSlider();
  }
});

// Обновляем слайдер при изменении размеров окна
window.addEventListener("resize", updateSlider);

// Инициализация
updateSlider();
