var start = document.querySelector("#start");

var timeEl = document.querySelector("#time");

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

var secondsLeft = 60;

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

    let btnA = document.createElement("button");


    document.getElementById("aText").innerHTML = choices.choiceA;
    document.getElementById("bText").innerHTML = choices.choiceB;
    document.getElementById("cText").innerHTML = choices.choiceC;
    document.getElementById("dText").innerHTML = choices.choiceD;




    setTime();

});




choiceA.addEventListener("click", function() {
    var question = document.getElementById("question");
    var body = document.getElementById("body");
    body.removeChild(question);

    var time = document.getElementById("time");
    var body = document.getElementById("body");
    body.removeChild(time);

    var answers = document.getElementById("answers");
    var body = document.getElementById("body");
    body.removeChild(answers);


    if (choices.choiceA === choices.choiceCorrect){
        const score = secondsLeft;
        document.getElementById("displayScore").innerHTML = "Score = " + score;
    }
    else {
        document.getElementById("displayScore").innerHTML = "Score = 0";
        secondsLeft = secondsLeft - 10;
    }

});

choiceB.addEventListener("click", function() {
    var question = document.getElementById("question");
    var body = document.getElementById("body");
    body.removeChild(question);

    var time = document.getElementById("time");
    var body = document.getElementById("body");
    body.removeChild(time);

    var answers = document.getElementById("answers");
    var body = document.getElementById("body");
    body.removeChild(answers);

    if (choices.choiceB === choices.choiceCorrect){
        const score = secondsLeft;
        document.getElementById("displayScore").innerHTML = "Score = " + score;
    }
    else {
        document.getElementById("displayScore").innerHTML = "Score = 0";
        secondsLeft = secondsLeft - 10;
    }

});

choiceC.addEventListener("click", function() {
    var question = document.getElementById("question");
    var body = document.getElementById("body");
    body.removeChild(question);

    var time = document.getElementById("time");
    var body = document.getElementById("body");
    body.removeChild(time);

    var answers = document.getElementById("answers");
    var body = document.getElementById("body");
    body.removeChild(answers);

    if (choices.choiceC === choices.choiceCorrect){
        const score = secondsLeft;
        document.getElementById("displayScore").innerHTML = "Score = " + score;
    }
    else {
        document.getElementById("displayScore").innerHTML = "Score = 0";
        secondsLeft = secondsLeft - 10;
    }

});

choiceD.addEventListener("click", function() {
    var question = document.getElementById("question");
    var body = document.getElementById("body");
    body.removeChild(question);

    var time = document.getElementById("time");
    var body = document.getElementById("body");
    body.removeChild(time);

    var answers = document.getElementById("answers");
    var body = document.getElementById("body");
    body.removeChild(answers);

    if (choices.choiceD === choices.choiceCorrect){
        const score = secondsLeft;
        document.getElementById("displayScore").innerHTML = "Score = " + score;
    }
    else {
        document.getElementById("displayScore").innerHTML = "Score = 0";
        secondsLeft = secondsLeft - 10;
    }

});



