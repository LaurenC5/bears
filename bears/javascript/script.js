// Set the date/time we want to countdown to
var countDownDate = new Date("Feb 25, 2024 21:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

 // Get today's date and time
 var now = new Date().getTime();

 // Find the distance between now and the count down date
 var distance = countDownDate - now;

 // Caculating the days, hours, minutes and seconds left
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Output the result in an element with id="date"
 document.getElementById("date").innerHTML = days + "D " + hours + "H "
 + minutes + "M " + seconds + "S ";

 // If the count down is over, write some text
 if (distance < 0) {
   clearInterval(x);
   document.getElementById("date").innerHTML = "KICKOFF!";
 }
}, 1000);

document.getElementById("new").innerHTML = new Date("Feb 25, 2024 21:30:00");
