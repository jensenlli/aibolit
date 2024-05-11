
const { Sim } = require('./gallery.js'); 

function runTests() {
    // Тестирование метода elemNext с инкрементом по умолчанию
    const slider = new Sim('slider1'); // создаем объект Sim
    const initialCurrentElement = slider.currentElement; // сохраняем нач знач-е
    slider.elemNext();
    console.log(`Test Passed: elemNext should increment currentElement by 1 if no argument is passed - ${slider.currentElement === initialCurrentElement + 1}`);

    // Тестирование метода elemNext с указанным инкрементом
    const slider2 = new Sim('slider1');
    const initialCurrentElement2 = slider2.currentElement;
    const incrementBy = 2; // знач-е для инкремента
    slider2.elemNext(incrementBy);
    console.log(`Test Passed: elemNext should increment currentElement by specified number - ${slider2.currentElement === initialCurrentElement2 + incrementBy}`); // выводим результат второго теста
}

runTests();