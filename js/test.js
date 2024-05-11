
function test() {
    const openModalButton = document.createElement('button');
    openModalButton.id = 'open-modal';
    const modalBoxThanks = document.createElement('div');
    modalBoxThanks.id = 'modal-box-thanks';
    modalBoxThanks.classList.add('modal__box');

    document.body.appendChild(openModalButton);
    document.body.appendChild(modalBoxThanks);

    // Проверка открытия модального окна
    openModalButton.click();
    if (!modalBoxThanks.classList.contains('open')) {
        console.error('Ошибка: класс "open" не был добавлен при клике на кнопку');
    }

    // Проверка закрытия модального окна
    const closeModalButton = document.createElement('button');
    closeModalButton.id = 'close_modal';
    document.body.appendChild(closeModalButton);

    closeModalButton.click();
    if (modalBoxThanks.classList.contains('open')) {
        console.error('Ошибка: класс "open" не был удален при клике на кнопку закрытия');
    }

    // Проверка закрытия модального окна при клике вне его
    modalBoxThanks.click();
    if (modalBoxThanks.classList.contains('open')) {
        console.error('Ошибка: класс "open" не был удален при клике вне модального окна');
    }

    document.body.removeChild(openModalButton);
    document.body.removeChild(modalBoxThanks);
    document.body.removeChild(closeModalButton);
}

test();