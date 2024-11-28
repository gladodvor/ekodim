const burgerMenu = document.getElementById("burgerMenu");
const mobileMenu = document.getElementById("mobileMenu");

burgerMenu.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
});

// Получаем элементы
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const photos = document.querySelectorAll(".photo");

// Открытие модального окна
photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = photo.src; // Устанавливаем выбранное фото в модалку
  });
});

// Закрытие модального окна
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закрытие модального окна при клике вне изображения
modal.addEventListener("click", (e) => {
  if (e.target !== modalImage) {
    modal.style.display = "none";
  }
});
