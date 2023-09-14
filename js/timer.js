"use strict";
let timerInterval;
let startTime;
let elapsedTime = 0;
const progressBar = document.querySelector(".progress-bar");
const percentageElement = document.querySelector(".percentage");

function startTimer() {
    const yearsInput = parseInt(document.getElementById("years").value) || 0;
    const monthsInput = parseInt(document.getElementById("months").value) || 0;
    const weeksInput = parseInt(document.getElementById("weeks").value) || 0;
    const daysInput = parseInt(document.getElementById("days").value) || 0;
    const hoursInput = parseInt(document.getElementById("hours").value) || 0;
    const minutesInput = parseInt(document.getElementById("minutes").value) || 0;
    const secondsInput = parseInt(document.getElementById("seconds").value) || 0;

    const totalTime =
        yearsInput * 31536000000 + // 1 year in milliseconds
        monthsInput * 2628000000 + // 1 month in milliseconds
        weeksInput * 604800000 + // 1 week in milliseconds
        daysInput * 86400000 + // 1 day in milliseconds
        hoursInput * 3600000 + // 1 hour in milliseconds
        minutesInput * 60000 + // 1 minute in milliseconds
        secondsInput * 1000; // 1 second in milliseconds

    startTime = Date.now();

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        const percentage = (elapsedTime / totalTime) * 100;
        progressBar.style.width = percentage + "%";

        if (percentage <= 50) {
            progressBar.style.backgroundColor = `rgb(255, ${Math.round(
                (255 * percentage) / 50
            )}, 0)`;
        } else {
            progressBar.style.backgroundColor = `rgb(${Math.round(
                (255 * (100 - percentage)) / 50
            )}, 165, 0)`;
        }

        percentageElement.textContent = percentage.toFixed(10) + "%"; 

        if (elapsedTime >= totalTime) {
            clearInterval(timerInterval);
            progressBar.style.width = "100%";
            percentageElement.textContent = "0.0000000000%%"; 
        }
    }, 1);
}

function resetTimer() {
    clearInterval(timerInterval);
    progressBar.style.width = "0%";
    percentageElement.textContent = "0.0000000000%"; 
}