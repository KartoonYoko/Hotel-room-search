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


let cal = new Calendar(2019, 9);

changeheadOfCalendar(cal);
setDates(cal);

let leftArrow = document.querySelector('.date-dropdown__arrow-left');
let rightArrow = document.querySelector('.date-dropdown__arrow-right');

let prevMonth = cal.prevMonth.bind(cal);
let nextMonth = cal.nextMonth.bind(cal);

leftArrow.addEventListener('click', prevMonth);
rightArrow.addEventListener('click', nextMonth);

/**
 * @param {Calendar} calendar
 */
function changeheadOfCalendar(calendar){
    let calendarYearMonth = document.querySelector('.date-dropdown__month-name');
    let year = calendar.getYear();
    let month = calendar.getMonth();

    switch(month){
        case 0:
            month = "Январь";
            break;
        case 1:
            month = "Февраль";
            break;
        case 2:
            month = "Март";
            break;
        case 3:
            month = "Апрель";
            break;
        case 4:
            month = "Май";
            break;
        case 5:
            month = "Июнь";
            break;
        case 6:
            month = "Июль";
            break;
        case 7:
            month = "Август";
            break;
        case 8:
            month = "Сентябрь";
            break;
        case 9:
            month = "Октябрь";
            break;
        case 10:
            month = "Ноябрь";
            break;
        case 11:
            month = "Декабрь";
            break;
        default:
            month = "Неведомая штука";

    }

    calendarYearMonth.innerHTML = month + " " + year;
}

leftArrow.addEventListener('click', () => changeheadOfCalendar(cal));
rightArrow.addEventListener('click', () => changeheadOfCalendar(cal));

/**
 * задает даты текущего месяца
 * @param {Calendar} calendar 
 */
function setDates(calendar){
    
    let datesWrapper = document.querySelector('.date-dropdown__dates');
    datesWrapper.innerHTML = "";
    let dates = calendar.getDates();
    
    let isLastMonth = false;

    dates.forEach(element => {
        let div = document.createElement("div");
        div.className = "date-dropdown__date";
        
        if (element == 1) { isLastMonth = true; }
        if (!isLastMonth) div.className += " date-dropdown__date-last-month";

        div.innerHTML = element;
        div.addEventListener('click', markDate);

        datesWrapper.append(div);
    });
}

/**
 * 
 */
function markDate(event){
    
    let dates = document.querySelectorAll('.date-dropdown__date');
    dates.forEach(element => {
        if (element.classList.contains("date-dropdown__date-active")){
            element.classList.remove("date-dropdown__date-active");
        }

        event.currentTarget.classList.add("date-dropdown__date-active");
    });

}

leftArrow.addEventListener('click', () => setDates(cal));
rightArrow.addEventListener('click', () => setDates(cal));