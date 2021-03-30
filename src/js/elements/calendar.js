

class Calendar{

    /**
     * 
     * @param {int} year 
     * @param {int} month 
     */
    constructor(year = 2021, month = 2){
        this.date = new Date(year, month, 0);

        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();

        this._setDates();
    }

    /**
     * формирует массив чисел из дат текущего месяца
     * и предыдущего, если текущий месяц начинается не с понедельника
     * @private
     */
    _setDates(){

        this.dates = [];

        // предыдущий месяц
        let prevDate = (this.month == 0) ? new Date(this.year - 1, 12, 0) : new Date(this.year, this.month, 0);   

        let prevMonthLastWeekLastDay = prevDate.getDay(); // последний день недели предыдущего месяца
   
        if (prevMonthLastWeekLastDay == 0){     // если месяц начинается с понедельника просто добавляем все дни в массив
            for (let i = 1; i <= this.day; i++){
                this.dates.push(i);
            } 
        }
        else{
            
            let prevMonthDayCount = prevDate.getDate(); // количество дней в предыдущем месяце

            let count = prevMonthLastWeekLastDay + 1;
            for (let i = 1; i < count; i++){
                this.dates.push(prevMonthDayCount - prevMonthLastWeekLastDay + i);
            }

            for(let i = 1; i <= this.day; i++){
                this.dates.push(i);
            }

        }

        
    }

    /**
     * вернет массив дат
     */
    getDates(){

        return this.dates;
    }

    /**
     * вернет месяц в виде числа,
     * начиная с нуля
     */
    getMonth(){
        return this.month;
    }

    /**
     * вернет год
     */
    getYear(){
        return this.year;
    }

    /**
     * 
     */
    prevMonth(){
        this.date = (this.month == 0) ? new Date(this.year - 1, 12, 0) : new Date(this.year, this.month, 0);   

        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();

        this._setDates();
    }

    /**
     * 
     */
    nextMonth(){
        this.date = (this.month == 11) ? new Date(this.year + 1, 1, 0) : new Date(this.year, this.month + 2, 0);   

        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();

        this._setDates();
    }

    printDate(){
        console.log(this.date);
        console.log("year " + this.year);
        console.log("month " + this.month);
        console.log("day " + this.day);
    }
}