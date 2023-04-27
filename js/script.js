let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');
    
    
function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;
        
        secondArrow.style = `transform: rotate(${seconds}deg);`
        minuteArrow.style = `transform: rotate(${minutes}deg);`
        hourArrow.style = `transform: rotate(${hours}deg);`
        
        hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
        minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
        
        setTimeout(() => clock(),1000)
        
}
clock()


// setTimeout() - создает нам задержку и говорит через сколько миллисекунд нам нужно что то выполнять

// Рекурсия - это когда функция вызывает саму  себя

// let i = 0;

// function rek() {
//     console.log(i);
//     i++
//     rek()
    
// }

// rek()
 


let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');
    
for(let i = 0; i < links.length;i++) {
    links[i].addEventListener('click', function() {
        for(let x = 0; x < links.length;x++) {
            links[x].classList.remove('active')
            tabs[x].classList.remove('active')
        }
        links[i].classList.add('active')
        tabs[i].classList.add('active')
    })
}


let secondWatch = document.querySelector('.stopwatch__seconds'),
    minuteWatch = document.querySelector('.stopwatch__minutes'),
    hoursWatch = document.querySelector('.stopwatch__hours'),
    btn = document.querySelector('.stopwatch__btn'),
    span = document.querySelector('.tabsLink__span');
    
let count = 0;
    
btn.addEventListener('click', () => {
    if(btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')
        setTimeout(() =>  timer(btn,count), 1000)
    }else if(btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')
    }else {
        btn.innerHTML = 'start'
        span.classList.remove('active_clear')
        secondWatch.innerHTML = 0
        minuteWatch.innerHTML = 0
        hoursWatch.innerHTML = 0
    }
})


function timer(btn,count) {
    if(btn.innerHTML == 'stop') {
        if(count == 59) {
            count = 0;
            secondWatch.innerHTML = count
            if(minuteWatch.innerHTML == 59) {
                minuteWatch.innerHTML = 0;
                hourNumber.innerHTML++
            }else {
                minuteWatch.innerHTML++;
            }
        }else {
            count++
            secondWatch.innerHTML = count
        }
        setTimeout(() => timer(btn,count), 1000);
    }
}