document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("modal-box-thanks").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close_modal").addEventListener("click", function() {
  document.getElementById("modal-box-thanks").classList.remove("open")
})

// Закрыть модальное окно при клике вне его
document.querySelector("#modal-box-thanks .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal-box-thanks").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});