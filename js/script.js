
setInterval(setClock, 1000);

//variables

const hourHand = document.querySelector('[data-hour-hand');
const minuteHand = document.querySelector('[data-minute-hand');
const secondHand = document.querySelector('[data-second-hand');



//function

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes() + 5) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours() - 1) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();