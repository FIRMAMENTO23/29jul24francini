document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to
    var countDownDate = new Date("jul 29, 2024 19:05:00").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function () {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the remaining time
        var distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById("countdown").innerHTML = days + "giorni " + hours + "ore " + minutes + "min " + seconds + "sec";

        // If the countdown is over, display a message 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Buon Viaggio!";
        }
    }, 1000);
});
