        let myDate = new Date();
        let myHour = myDate.getHours();

        let mySentence = "";
        let myColor = "";
        let myImage = "";
        let myAlt = "";

        if (myHour >= 5 && myHour < 12) {
            mySentence = "Good morning! Time to wake up and start the day!";
            myColor = "orange";
            myImage = "images/morning.png";
            myAlt = "Morning image";
        } 
        else if (myHour >= 12 && myHour < 18) {
            mySentence = "Good afternoon! Hope your day is going well!";
            myColor = "skyblue";
            myImage = "images/afternoon.png";
            myAlt = "Afternoon image";
        } 
        else if (myHour >= 18 && myHour < 23) {
            mySentence = "Good evening! Time to relax a little.";
            myColor = "mediumpurple";
            myImage = "images/evening.png";
            myAlt = "Evening image";
        } 
        else {
            mySentence = "Good night! It is late, go get some sleep!";
            myColor = "midnightblue";
            myImage = "images/night.png";
            myAlt = "Night image";
        }

        document.getElementById("time-text").innerHTML = mySentence;
        document.getElementById("time-pic").src = myImage;
        document.getElementById("time-pic").alt = myAlt;
        document.querySelector("html").style.backgroundColor = myColor;

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