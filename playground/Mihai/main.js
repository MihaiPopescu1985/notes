/*
The function should receive another function or lambda, and the exercise as a string.
The function should apply the received function or lambda to the received string.
*/
function show_exercise(target, exercise) {
    document.getElementById(target).innerHTML = exercise
}


/**
 * 


var arraySolutionMixed = solution.split("\n");
var arraySolution = solution.split("\n");

arraySolutionMixed.pop();
arraySolution.pop();

var answer = "";

var table = document.getElementById("table");
var answerDiv = document.getElementById("answer");

var isResetButtonPressed = false;
var resetButton = document.getElementById("resetButton");

document.getElementById("submitButton").onclick = function() {

    if (solution.localeCompare(answer) == 0) {
        alert("Congratulations");
    } else {
        alert("Try again");
    }
}

resetButton.onclick = function() {
    resetButton.innerHTML = "Try again";
    resetProblem();
}

function resetProblem() {
    resetTable();
    mixArrayContent();
    setupTableButtons();

    answer = "";
    answerDiv.innerHTML = answer;
}

function resetTable() {
    let rows = table.getElementsByTagName("tr").length;
    for (let index = 0; index < rows; index++) {
        table.deleteRow(0);
    }
}

function setupTableButtons() {
    for (let index = 0; index < arraySolutionMixed.length; index++) {
        let row = table.insertRow(-1);
        row.style.width = "100%";
        let btn = document.createElement("div");
        setupIndividualButton(btn, arraySolutionMixed[index]);
    
        let cel = row.insertCell(-1);
        cel.appendChild(btn);
    }
}

function mixArrayContent() {
    for (let index = 0; index < arraySolutionMixed.length; index++) {

        let randomIndex = Math.floor(Math.random() * arraySolutionMixed.length)
        let tempValue = arraySolutionMixed[index];

        arraySolutionMixed[index] = arraySolutionMixed[randomIndex];
        arraySolutionMixed[randomIndex] = tempValue;
    }
}

function setupIndividualButton(newButton, newText) {
    newButton.innerText = newText;
    newButton.className = "w3-hover-opacity";
    newButton.className = "w3-hover-grey";
    newButton.style.userSelect = "none";
    newButton.style.whiteSpace = "pre";
    newButton.style.width = "100%";
    newButton.style.height = "100%";
    newButton.style.margin = "0px";
    newButton.style.padding = "0px";

    newButton.onclick = function() {
        newButton.style.display = "none";
        answer += newButton.textContent;
        answer += "\n";
        answerDiv.innerText = answer;
    }
}
*/
