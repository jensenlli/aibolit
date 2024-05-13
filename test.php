<?php

require '../thanks.js';

// Функция для проверки добавления класса "open"
function testAddClass() {
    $_GET['open-modal'] = 'click'; // Симулируем событие click
    ob_start(); 
    include 'thanks.js'; 
    $output = ob_get_clean();

    // Проверяем наличие класса "open" в соответствующем элементе
    if (document.getElementById("modal-box-thanks").classList.remove("open")) {
        echo "Тест успешно пройден: класс 'open' был добавлен.";
    } else {
        echo "Тест не пройден: класс 'open' не был добавлен.";
    }
}

testAddClass();

?>