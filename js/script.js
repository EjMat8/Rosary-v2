const closeButton = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");

closeButton.addEventListener("click", function () {
  modal.classList.add("u-hidden");
});
