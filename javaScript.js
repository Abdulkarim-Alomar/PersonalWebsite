let ourSkillsSection = document.getElementById("our-Skills");
let progressSpans = document.querySelectorAll(".prog span");
window.addEventListener("scroll", () => {
    if (window.scrollY >= ourSkillsSection.offsetTop - 200) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
});

let awesomeSection = document.getElementById("awesome");
let numberSpans = document.querySelectorAll(".num");
let started = false //the function doesn't start yet

window.addEventListener("scroll", () => {
    if (window.scrollY >= awesomeSection.offsetTop - 200) {
        if (!started) {
            numberSpans.forEach((span) => startCount(span));
        }
        started = true;
    }
});
function startCount(ele) {
    let goal = ele.dataset.number;
    let counter = setInterval(() => {
        ele.textContent++;
        if (ele.textContent === goal) {
            clearInterval(counter);
        }
    }, 2000 / goal);
}

let eventTime = new Date("Dec 31, 2023,23:59:59").getTime();

let countDown = setInterval(() => {
    let nowTime = new Date().getTime();
    let timeDiff = eventTime - nowTime;
    
    let day = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.querySelector(".days").innerHTML = day < 10? `0${day}`:day;

    let hours = Math.floor(timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 *60));
    document.querySelector(".hours").innerHTML = hours < 10? `0${hours}`:hours;

    let minutes = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
    document.querySelector(".minutes").innerHTML = minutes < 10? `0${minutes}`:minutes;

    let seconds = Math.floor(timeDiff % (1000 * 60) / 1000);
    document.querySelector(".counter .second").innerHTML = seconds < 10? `0${seconds}`:seconds;

    if (timeDiff < 0)
        clearInterval(countDown);
},1000)