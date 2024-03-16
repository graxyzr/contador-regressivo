function startTimer() {
    var hours = parseInt(document.getElementById("hours").value) || 0;
    var minutes = parseInt(document.getElementById("minutes").value) || 0;
    var seconds = parseInt(document.getElementById("seconds").value) || 0;

    if (hours === 0 && minutes === 0 && seconds === 0) {
        document.getElementById("timer").innerHTML = "Os campos estão vazios.";
        return;
    }

    var totalTime = hours * 3600 + minutes * 60 + seconds;

    var timerInterval = setInterval(function () {
        if (totalTime <= 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "Tempo Esgotado!";
            var audio = document.getElementById("audio");
            audio.play();
            return;
        }

        var hoursLeft = Math.floor(totalTime / 3600);
        var minutesLeft = Math.floor((totalTime % 3600) / 60);
        var secondsLeft = totalTime % 60;

        document.getElementById("timer").innerHTML = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
        totalTime--;
    }, 1000);
}