$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
/* function clockDisplay(){
    const fullDate = new Date();
    var days = fullDate.getDay();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();

    if(hours<10){
        hours = "0" + hours;
    }
    if(mins<10){
        mins = "0" + mins;
    }
    if(secs<10){
        secs = "0" + secs;
    }
    document.getElementById('day').innerHTML = days + 1;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = mins;
    document.getElementById('second').innerHTML = secs;
}
setInterval(clockDisplay, 1000);
*/

// create clock countdown
 
function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t/1000)%60);
    var minutes = Math.floor((t/1000/60)%60);
    var hours = Math.floor((t/(1000*60*60))%24);
    var days = Math.floor(t/(1000*60*60*24));
    return { // trả về đối tượng
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
function initializeClock(id,endtime){
    var clock = document.querySelector(id);
    var daysSpan = clock.querySelector('#day');
    var hoursSpan = clock.querySelector('#hour');
    var minutesSpan = clock.querySelector('#minute');
    var secondsSpan = clock.querySelector('#second');
    function updateClock(){
        var t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTMl = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if(t.total<=0){
            clearInterval(timeinterval);
        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
function getCookie(name){
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if(parts.length==2) return parts.pop().split(";").shift();
}
if(document.cookie&&document.cookie.match('myClock')){
    var deadline = getCookie('myClock');
}else{
    var deadline = new Date(Date.parse(new Date()) + 1*24*60*60*1000);
    document.cookie = 'myClock=' + deadline + '; path=/';
}
initializeClock('.hot-deal-countdown',deadline);
