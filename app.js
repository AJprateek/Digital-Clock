const hoursEl = document.querySelector('.hr-number');
const minutesEl = document.querySelector('.min-number');
const secondsEl = document.querySelector('.sec-number');
const meridianEl = document.querySelector('.meridian');

const getCurrentTime = () => {
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let mer = "AM";
    if (hr > 12) {
        hr = hr - 12;
        mer = "PM";
    }

    hoursEl.innerText = hr < 10 ? `0${hr}` : hr;
    minutesEl.innerText = min < 10 ? `0${min}` : min;
    secondsEl.innerText = sec < 10 ? `0${sec}` : sec;
    meridianEl.innerText = mer;

    setTimeout(getCurrentTime,1000);
}


getCurrentTime();