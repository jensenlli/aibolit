document.getElementById("open-modal2").addEventListener("click", function() {
    document.getElementById("modal-box-open1").classList.add("open")
})


// Закрыть модальное окно
document.getElementById("close_modal").addEventListener("click", function() {
    document.getElementById("modal-box-open1").classList.remove("open")
})

// Закрыть модальное окно при клике вне его
document.querySelector("#modal-box-open1 .modal__box_2").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal-box-open1").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});