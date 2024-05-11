// thanks.test.js

const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');
document.documentElement.innerHTML = html;

const thanks = require('./thanks.js');

test('Modal opens when "open-modal" is clicked', () => {
  document.getElementById('open-modal').click();
  expect(document.getElementById('modal-box-thanks').classList.contains('open')).toBe(true);
});

test('Modal closes when "close_modal" is clicked', () => {
  document.getElementById('close_modal').click();
  expect(document.getElementById('modal-box-thanks').classList.contains('open')).toBe(false);
});

test('Modal closes when clicked outside the modal', () => {
  const modalBox = document.querySelector('#modal-box-thanks .modal__box');
  modalBox.click();
  expect(document.getElementById('modal-box-thanks').classList.contains('open')).toBe(false);
});