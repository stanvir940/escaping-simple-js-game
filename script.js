let intervalId;
function startTimer(durationInSecond) {
    let timerElement = document.getElementById('timer');

    if(!timerElement){
        console.error("timer element isnot found!");
        return;
    }
    let duration = durationInSecond;
    let seconds;

    setInterval(function () {
        seconds = parseInt(duration % 60 ,10);

        seconds = seconds<10 ? '0' + seconds : seconds;

        timerElement.textContent=seconds;

        if(--duration < 0) {
            clearInterval(intervalId);
            timerElement.textContent = "Game Over!";
        }
    }, 1000);

    return intervalId;
}

intervalId = startTimer(10);