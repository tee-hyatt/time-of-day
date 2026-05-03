let myDate = new Date();
let myHour = myDate.getHours();

let mySentence = "";
let myColor = "";
let myImage = "";
let myAlt = "";

if (myHour >= 5 && myHour < 12) {
    mySentence = "Good morning! Time to wake up and start the day!";
    myColor = "linear-gradient(135deg, #f6d365, #fda085)";
    myImage = "images/morning.png";
    myAlt = "Morning image";
} 
else if (myHour >= 12 && myHour < 18) {
    mySentence = "Good afternoon! Hope your day is going well!";
    myColor = "linear-gradient(135deg, #89f7fe, #66a6ff)";
    myImage = "images/afternoon.png";
    myAlt = "Afternoon image";
} 
else if (myHour >= 18 && myHour < 23) {
    mySentence = "Good evening! Time to relax a little.";
    myColor = "linear-gradient(135deg, #667eea, #764ba2)";
    myImage = "images/evening.png";
    myAlt = "Evening image";
} 
else {
    mySentence = "Good night! It is late, go get some sleep!";
    myColor = "linear-gradient(135deg, #141e30, #243b55)";
    myImage = "images/night.png";
    myAlt = "Night image";
}

document.getElementById("time-text").innerHTML = mySentence;
document.getElementById("time-pic").src = myImage;
document.getElementById("time-pic").alt = myAlt;

/* 🔥 THIS IS THE IMPORTANT CHANGE */
document.querySelector("html").style.background = myColor;

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = days[myDate.getDay()];

document.getElementById("day-text").innerHTML = "Today is " + today + ".";

document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    document.getElementById("html-validate").href =
        "https://validator.w3.org/nu/?doc=" + encodeURIComponent(currentUrl);
    document.getElementById("css-validate").href =
        "https://jigsaw.w3.org/css-validator/validator?uri=" + encodeURIComponent(currentUrl);
});