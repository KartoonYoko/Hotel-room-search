'use sctrict'

/**
 * показать/свернуть выпадающее окно у dropdown
 * на котором произошел клик
 * @param {*} event 
 */
function changeDropMenu(event){
    const arrow = event.currentTarget;
    const menu = arrow.closest('.dropdown').querySelector('.dropdown__menu');
    const dropdown = menu.parentElement.querySelector('.dropdown__head');
    if (menu.style.display == '' || menu.style.display == 'block'){
        menu.style.display = 'none';
        dropdown.classList.remove('dropdown__head-active');
        dropdown.classList.add('dropdown__head-nonactive');
    }
    else{
        menu.style.display = 'block';
        dropdown.classList.remove('dropdown__head-nonactive');
        dropdown.classList.add('dropdown__head-active');
    }
}

/**
 * изменить счетчик в выпадающем меню
 * @param {*} event 
 */
function changeCounterDropdown(event){

    const parent = event.currentTarget.parentElement;
    const counter = parent.querySelector('.dropdown__counter');
    let counterValue = Number(counter.value);
    let circleMinus = '';
    if (event.currentTarget.querySelector('.dropdown__minus') != null) {
        circleMinus = event.currentTarget;
    }
    else{
        circleMinus = event.currentTarget.parentElement.querySelector('.dropdown__circle');
    }

    if (event.currentTarget.querySelector('.dropdown__minus') != null){
        if (counterValue != '0') { 
            counterValue--; 
        }
        
        counter.value = counterValue;
    }
    else{
        if (event.currentTarget.querySelector('.dropdown__plus') != null){
            counterValue++;
            counter.value = counterValue;

        }
    }

    changeCircleMinusClass();
    changeClearButtonClass();
    writeNumberOfGuests();
}

/**
 * изменяет класс круга с минусом в зависимости от счетчика,
 * 
 * @param circleMinus объект круга для минуса
 * @param counter объект счетчика h3
 */
function changeCircleMinusClass(){
    const circles = document.querySelectorAll('.dropdown__circle');

    circles.forEach(element => {
        if (element.querySelector('.dropdown__minus') != null){
            let counter = element.parentElement.querySelector('.dropdown__counter');
            let counterValue = counter.value;
            if (counterValue == '0'){
                element.classList.remove('dropdown__circle-active');
                element.classList.add('dropdown__circle-nonactive');
            }
            else{
                element.classList.remove('dropdown__circle-nonactive');
                element.classList.add('dropdown__circle-active');
            }
        }
    });   
}

/**
 * скрывает кнопку "очистить" в меню,
 * меняя класс
 */
function changeClearButtonClass(){
    const btn = document.querySelector('.dropdown__btn-clear');
    const counters = document.querySelectorAll('.dropdown__counter');
    let countersValue = 0;
    counters.forEach(element => {
        countersValue += Number(element.value);
    });

    if (countersValue == 0){
        if (!btn.classList.contains('dropdown__btn-clear-nonactive')){
            btn.classList.add('dropdown__btn-clear-nonactive');
        }
    }
    else{
        btn.classList.remove('dropdown__btn-clear-nonactive');
    }
}

/**
 * изменение надписи о количестве человек
 */
function writeNumberOfGuests(){
    const counters = document.querySelectorAll('.dropdown__counter');
    let countersValue = 0;
    counters.forEach(element => {
        countersValue += Number(element.value);
    });

    const text = document.querySelector('.dropdown__head-text'); 
    console.log(text.innerHTML);
    if(countersValue == 0){
        text.innerHTML = 'Сколько гостей?';
    }
    else{
        switch(countersValue){
            case 1: 
                text.innerHTML = countersValue + ' гость';
                break;
            case 2: 
                text.innerHTML = countersValue + ' гостя';
                break;
            case 3: 
                text.innerHTML = countersValue + ' гостя';
                break;
            case 4: 
                text.innerHTML = countersValue + ' гостя';
                break;
            default: 
                text.innerHTML = countersValue + ' гостей';
        }
    }
}

/**
 * очищает все счетчики у выпадающего меню
 */
function clearAllCounters(){
    const counters = document.querySelectorAll('.dropdown__counter');

    counters.forEach(element => {
        element.value = 0;
    });

    changeClearButtonClass();
    changeCircleMinusClass();
    writeNumberOfGuests();
}

/**
 * Close the dropdown menu if the user clicks outside of it
 * @param {*} event 
 */
window.addEventListener('click', function(event) {

    if (!event.target.closest('.dropdown')) {
        head.forEach(element => {
            const menu = element.closest('.dropdown').querySelector('.dropdown__menu');
            if (menu.style.display == '' || menu.style.display == 'block')
                menu.style.display = 'none';
        });      
    }
});

const head = document.querySelectorAll('.dropdown__head');
const counters = document.querySelectorAll('.dropdown__circle');
const clearButton = document.querySelector('.dropdown__btn-clear');

clearButton.addEventListener('click', clearAllCounters);
head.forEach(element => element.addEventListener('click', () => changeDropMenu(event)));
counters.forEach(element => element.addEventListener('click', () => changeCounterDropdown(event)));
counters.forEach(element => {
    if (element.querySelector('.dropdown__minus') != null){
        const counter = element.parentElement.querySelector('.dropdown__counter');
        changeCircleMinusClass(element, counter.value);
    }
});