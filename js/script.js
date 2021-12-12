window.addEventListener('DOMContentLoaded', function(event) {

    const deadline = '2022-01-01';
   
    //функция которая определяет разницу между дедлайном и текущим временем
    function getTimeRemaining(endtime) {

        const t = Date.parse(endtime) - Date.parse(new Date()); //конечное время в мс - текущую дату. 
        
        // Теперь эту разницу переведем в дни часы минуты и секунды
        let days = Math.floor(t / (1000 * 60 * 60 * 24)); // получили дни
        let hours = Math.floor((t / 1000 * 60 * 60) % 24); // получили часы 
        let minutes = Math.floor((t / 1000 / 60) % 60); // минуты
        let seconds = Math.floor((t / 1000) % 60); // секунды

        return {
            't': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    }

    function getZero(num) { // если число из одного знака - подставим ведущий 0
        if (num >= 0 && num < 10) {
            return num = `0${num}`;
        } else {
            return num;
        }

    }


    function setTime(selector, endtime) {
        const timer = document.querySelector(selector);
        let days = timer.querySelector('#days');
        let hours = timer.querySelector('#hours');
        let minutes = timer.querySelector('#minutes');
        let seconds = timer.querySelector('#seconds');


        let timeInterval = setInterval(updateClock, 1000);

        updateClock() // чтобы в первую секунду не подставлялись значения из верстки

        function updateClock() {
            const time = getTimeRemaining(endtime);
            days.innerHTML = getZero(time.days);
            hours.innerHTML = getZero(time.hours);
            minutes.innerHTML = getZero(time.minutes);
            seconds.innerHTML = getZero(time.seconds);

            if (time.t <= 0) {
                clearInterval(timeInterval);
            }

        }
    }
    setTime('.timer', deadline)
    setTime('.timer1', deadline)


})