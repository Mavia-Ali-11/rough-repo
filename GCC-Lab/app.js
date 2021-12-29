// Authentication

var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var current = document.getElementById('current');
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var emailLogin = document.getElementById("email-login");
var passwordLogin = document.getElementById("password-login");
var errorMsg = document.getElementsByClassName("errorMsg");
var successMsg = document.getElementsByClassName("successMsg");

function login() {
    form2.style.transform = 'translateX(300px)';
    form1.style.transform = 'translateX(300px)';
    current.style.transform = 'translateX(6px)';
}

function register() {
    form1.style.transform = 'translateX(0px)';
    form2.style.transform = 'translateX(0px)';
    current.style.transform = 'translateX(110px)';
}

function signin() {
    if (emailLogin.value == "") {
        errorMsg[0].innerHTML = "Email is required.";
    } else if (passwordLogin.value == "") {
        errorMsg[0].innerHTML = "Password is required.";
    }
    else {
        firebase.auth().signInWithEmailAndPassword(emailLogin.value, passwordLogin.value)
            .then((result) => {
                errorMsg[0].innerHTML = "";
                successMsg[0].innerHTML = "Signin successfully.";
                sessionStorage.setItem("name", result.user.displayName);
                setTimeout(() => {
                    window.location.href = "quiz.html";
                }, 2000);
            })
            .catch(function (error) {
                errorMsg[0].innerHTML = error.message;
            });
    }
}

function signup() {
    if (username.value == "") {
        errorMsg[1].innerHTML = "Username is required.";
    } else if (email.value == "") {
        errorMsg[1].innerHTML = "Email is required.";
    } else if (password.value == "") {
        errorMsg[1].innerHTML = "Password is required.";
    } else {
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then(() => {
                sessionStorage.setItem("name", username.value);
                errorMsg[1].innerHTML = "";

                firebase.auth().currentUser.updateProfile({
                    displayName: username.value
                }).then(() => {
                    successMsg[1].innerHTML = "Signup successfully.";
                    setTimeout(() => {
                        window.location.href = "quiz.html";
                    }, 2000);
                })
            })
            .catch(function (error) {
                errorMsg[1].innerHTML = error.message;
            });
    }
}

// Quiz App

var quizQuestions = [
    {
        question: "What is the full form of CSS?",
        answer: "Cascading Style Sheets",
        options: ["Common Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"]
    },
    {
        question: "Correct HTML tag for the largest heading is?",
        answer: "&lt;h1&gt;",
        options: ["<h1>", "<head>", "<h6>", "<heading>"]
    },
    {
        question: "Which one is a legal variable name in JavaScript?",
        answer: "_xyz123",
        options: ["123xyz", "@xyz123", "break", "_xyz123"]
    },
    {
        question: "What is the full form of HTML?",
        answer: "Hyper Text Markup Language",
        options: ["Hyper Test Markup Language", "Hyper Text Markup Language", "Hyper Text Module Language", "None Of The Above"]
    },
    {
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction()",
        options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "def myFunction()"]
    }
]

var seconds;
var minutes;
var sec = 60;
var min = 02;

function totalTime() {
    sec--;
    if (sec < 0) {
        sec = 59;
        min--;
    }

    if (sec < 10) {
        seconds = "0" + sec.toString();
    }
    else {
        seconds = sec;
    }

    if (min < 10) {
        minutes = "0" + min.toString();
    }
    else {
        minutes = min;
    }

    var watch = document.getElementById("watch");
    watch.innerHTML = minutes + ":" + seconds;

    if (watch.innerHTML == "00" + ":" + "59") {
        watch.style.color = "red";
    }

    if (watch.innerHTML == "00" + ":" + "00") {
        window.location.href = "result.html";
    }
}


function displayQuesNum(x) {
    var quesNum = document.getElementById("quesNum");
    quesNum.innerHTML = "";
    var numPara = document.createElement("p");
    var num = document.createTextNode("Question " + x + " / 5");
    numPara.appendChild(num);
    quesNum.appendChild(numPara);
}

function displayOptions(x) {
    for (var i = 0; i < quizQuestions[x].options.length; i++) {
        var ques = document.getElementById("questions");
        var span = document.createElement("span");
        var lineBreak = document.createElement("br");
        var optionNum = document.createTextNode(i + 1 + ". ");
        span.setAttribute("id", "span")
        span.appendChild(optionNum);
        var p = document.createElement("p");
        p.setAttribute("class", "options");
        p.setAttribute("onclick", "selected(this)");
        var option = document.createTextNode(quizQuestions[x].options[i]);
        p.appendChild(option);
        ques.appendChild(span)
        ques.appendChild(p);
        ques.appendChild(lineBreak);
    }
}

var interval;
function startQuiz() {
    var nameSession = sessionStorage.getItem("name");

    if (nameSession == null) {
        window.location.href = "index.html";
    }
    else {
        interval = setInterval(totalTime, 1000);
        
        var examineeName = document.getElementById("examineeName");
        examineeName.innerHTML = "Examinee: " + nameSession;

        displayQuesNum(1);

        var ques = document.getElementById("questions");
        var h3 = document.createElement("h3");
        h3.setAttribute("id", "question");
        var text = document.createTextNode(quizQuestions[0].question);
        h3.appendChild(text);
        ques.appendChild(h3);

        displayOptions(0);

        var button = document.getElementById("next");
        button.innerHTML = "NEXT";
        button.setAttribute("onclick", "nextQuestion()");
    }
}

var quesNow = 0;
function nextQuestion() {
    var selector = document.getElementsByClassName("options");
    if (selector[0].hasAttribute("id") || selector[1].hasAttribute("id") || selector[2].hasAttribute("id") || selector[3].hasAttribute("id")) {
        quesNow++;
        var ques = document.getElementById("questions");
        ques.innerHTML = ""
        var h3 = document.createElement("h3");
        h3.setAttribute("id", "question");
        var text = document.createTextNode(quizQuestions[quesNow].question);
        h3.appendChild(text);
        ques.appendChild(h3);

        displayQuesNum(quesNow + 1)

        displayOptions(quesNow);

        if (quesNow == 4) {
            var button = document.getElementById("next");
            button.innerHTML = "SUBMIT";
            button.setAttribute("onclick", "goResult()");
        } 
        else {
            button.setAttribute("onclick", "nextQuestion()");
        }
    } else {
        alert("Select any option to proceed.");
    }
}

function goResult() {
    var selector1 = document.getElementsByClassName("options");
    if (selector1[0].hasAttribute("id") || selector1[1].hasAttribute("id") || selector1[2].hasAttribute("id") || selector1[3].hasAttribute("id")) {
        window.location.href = "result.html";
        var time = watch.innerHTML;
        sessionStorage.setItem("time", time);
    } else {
        alert("Select any option to proceed.");
    }
}

function selected(y) {
    unselect();
    y.classList.add("active");
    y.setAttribute("id", "unuse");
    validAnswer();
}

function unselect() {
    var active = document.getElementsByClassName("active");
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active");
    }
}

var score = 0;
function validAnswer() {
    var userAns = document.getElementsByClassName("active");
    if (userAns[0].innerHTML == quizQuestions[quesNow].answer) {
        score = score + 10;
    }
    sessionStorage.setItem("score", score);
}

var nameSession = sessionStorage.getItem("name");
var over = document.getElementById("over");
var player = document.createTextNode(nameSession);
over.appendChild(player);

function showResult() {
    var Score = sessionStorage.getItem("score");
    var studentScore = document.getElementById("score");
    var textScore = document.createTextNode("Points Scored: " + Score + " / 50");
    studentScore.appendChild(textScore);
    var perc = document.getElementById("percentage");
    var percText = document.createTextNode("Percentage Scored: " + (Score / 50) * 100 + " %");
    perc.appendChild(percText);
    var timeTook = sessionStorage.getItem("time");
    var timeTaken = document.getElementById("timeTaken");
    timeText = document.createTextNode("Time Left: " + timeTook + " out of 3:00");
    timeTaken.appendChild(timeText);
}