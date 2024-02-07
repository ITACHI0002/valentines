document.addEventListener("DOMContentLoaded", function() {
    const timerDisplay = document.getElementById('timer');
    let timeLeft = 58140;
    const startTime = new Date();
    startTime.setHours(1, 0, 0);

    const currentTime = new Date();
    currentTime.setDate(currentTime.getDate() + 1);

    let delay = startTime.getTime() - currentTime.getTime();

    setTimeout(startTimer, delay);

    if (delay < 0) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 2); // Increment the date by 1 to get tomorrow's date
        tomorrow.setHours(1, 0, 0); // Set the hours, minutes, and seconds of tomorrow's start time
        delay = tomorrow.getTime() - currentTime.getTime();
    }

    setTimeout(startTimer, delay);

    function startTimer(){
        const countdown = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                changePage();
            } else {
                timerDisplay.textContent = formatTime(timeLeft);
                timeLeft--;
            }
        }, 1000);
    }

    function formatTime(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function changePage() {
        // Change page content here
        window.location.href = "/propose day/index.html";
    }
});
