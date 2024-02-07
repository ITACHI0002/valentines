document.addEventListener("DOMContentLoaded", function() {
    const timerDisplay = document.getElementById('timer');
    let timeLeft = 86400;

        const countdown = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                changePage();
            } else {
                timerDisplay.textContent = formatTime(timeLeft);
                timeLeft--;
            }
        }, 1000);

    function formatTime(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function changePage() {
        // Change page content here
        window.location.href = "index.html";
    }


});
