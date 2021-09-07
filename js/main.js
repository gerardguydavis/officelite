const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

const deadline = new Date('4 Nov 2021 00:00:00 EST').getTime();

const runTimer = setInterval(function () {
    let today = new Date().getTime();
    let distance = deadline - today;
    let seconds = Math.floor((distance / 1000) & 60);
    let minutes = Math.floor((distance / 1000 / 60) % 60);
    let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    if (days < 10) {
        daysDisplay.innerHTML = `
            <div class="count">0${days}</div>
            <div class="unit">Days</div>
            `;
    } else {
        daysDisplay.innerHTML = `
            <div class="count">${days}</div>
            <div class="unit">Days</div>
            `;
    };
    if (hours < 10) {
        hoursDisplay.innerHTML = `
            <div class="count">0${hours}</div>
            <div class="unit">Hours</div>
            `;
    } else {
        hoursDisplay.innerHTML = `
            <div class="count">${hours}</div>
            <div class="unit">Hours</div>
            `;
    };
    if (minutes < 10) {
        minutesDisplay.innerHTML = `
            <div class="count">0${minutes}</div>
            <div class="unit">Minutes</div>
            `;
    } else {
        minutesDisplay.innerHTML = `
            <div class="count">${minutes}</div>
            <div class="unit">Minutes</div>
            `;
    };
    if (seconds < 10) {
        secondsDisplay.innerHTML = `
            <div class="count">0${seconds}</div>
            <div class="unit">Seconds</div>
            `;
    } else {
        secondsDisplay.innerHTML = `
            <div class="count">${seconds}</div>
            <div class="unit">Seconds</div>
            `;
    };
    return {
        distance,
        days,
        hours,
        minutes,
        seconds
    };
}, 1000);


runTimer();