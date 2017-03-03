new WOW().init();

function updateCountdown(ts) {
  var clock = document.getElementById('clockdiv');
  var monthsSpan = clock.querySelector('.months');
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');

  hoursSpan.innerHTML = ts.hours;
  daysSpan.innerHTML = ts.days;
  monthsSpan.innerHTML = ts.months;
  minutesSpan.innerHTML = ts.minutes;
}

var timerID = countdown(function(ts){
  updateCountdown(ts);
}, new Date(Date.parse('2017/07/06 09:00')), countdown.MONTHS | countdown.DAYS | countdown.HOURS | countdown.MINUTES);
