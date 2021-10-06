var start = document.querySelector("#start");

var timeEl = document.querySelector(".time");

var choiceA = document.querySelector("#a");
var choiceB = document.querySelector("#b");
var choiceC = document.querySelector("#c");
var choiceD = document.querySelector("#d");

const choices = {
    choiceA: "1. strings",
    choiceB: "2. booleans",
    choiceC: "3. alerts",
    choiceD: "4. numbers",
    choiceCorrect: "3. alerts"
};

var secondsLeft = 30;

function setTime() {
    var timerInterval = setInterval(function() {

        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

start.addEventListener("click", function() {

    var startButton = document.getElementById("start");
    var body = document.getElementById("body");
    body.removeChild(startButton);

    document.getElementById("question").innerHTML = "Commonly used data types DO NOT include:";

    document.getElementById("aText").innerHTML = choices.choiceA;
    document.getElementById("bText").innerHTML = choices.choiceB;
    document.getElementById("cText").innerHTML = choices.choiceC;
    document.getElementById("dText").innerHTML = choices.choiceD;

    setTime();

});




choiceA.addEventListener("click", function() {
    if (choices.choiceA === choices.choiceCorrect){
        const score = secondsLeft;
        document.getElementById("displayScore").innerHTML = "Score = " + score;
    }
    else {
        document.getElementById("displayScore").innerHTML = "Score = 0";
    }

});

choiceB.addEventListener("click", function() {
    if (choices.choiceB === choices.choiceCorrect){
        const score = secondsLeft;
        document.getElementById("displayScore").innerHTML = "Score = " + score;
    }
    else {
        document.getElementById("displayScore").innerHTML = "Score = 0";
    }

});

choiceC.addEventListener("click", function() {
    if (choices.choiceC === choices.choiceCorrect){
        const score = secondsLeft;
        document.getElementById("displayScore").innerHTML = "Score = " + score;
    }
    else {
        document.getElementById("displayScore").innerHTML = "Score = 0";
    }

});

choiceD.addEventListener("click", function() {
    if (choices.choiceD === choices.choiceCorrect){
        const score = secondsLeft;
        document.getElementById("displayScore").innerHTML = "Score = " + score;
    }
    else {
        document.getElementById("displayScore").innerHTML = "Score = 0";
    }

});