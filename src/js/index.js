import * as moment from 'moment';

const CONFERENCE_DATE = new moment('2017-06-20 09:00');

function updateTimer() {
    var now = moment();
    var diff = moment.duration(now.diff(CONFERENCE_DATE));
    var month_span = document.querySelector('span.months');
    month_span.innerHTML = 12 - diff.months();
    var days_span = document.querySelector('span.days');
    days_span.innerHTML = CONFERENCE_DATE.daysInMonth() - diff.days();
    var hours_span = document.querySelector('span.hours');
    hours_span.innerHTML = 24 - diff.hours();
    var minutes_span = document.querySelector('span.minutes');
    minutes_span.innerHTML = 60 - diff.minutes();
}

document.onload = function() {
    updateTimer();
    var timer = setInterval(updateTimer, 60000);
}();
