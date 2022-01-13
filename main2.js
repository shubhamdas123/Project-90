function getValue() {
    player1 = localStorage.getItem("player1");
    player2 = localStorage.getItem("player2");
    document.getElementById("player1Lbl").innerHTML = player1 + " : ";
    document.getElementById("player2Lbl").innerHTML = player2 + " : ";
    document.getElementById("questionPlayer").innerHTML = player1;
    document.getElementById("answerPlayer").innerHTML = player2;
}

function sendQues() {
    num1 = document.getElementById("num1Input").value;
    num2 = document.getElementById("num2Input").value;
    var division = document.getElementById("output");
    var label = document.createElement("label");
    label.id = "numberLbl";
    label.innerHTML = num1 + " x " + num2;
    division.appendChild(label);
    var br = document.createElement("br");
    division.appendChild(br);
    var label2 = document.createElement("label");
    label2.id = "answerLbl";
    label2.innerHTML = "Answer : ";
    division.appendChild(label2);
    var input = document.createElement("input");
    input.type = "text";
    input.id = "answerInput";
    input.style.marginLeft = 10;
    input.placeholder = "Answer";
    division.appendChild(input);
    var br2 = document.createElement("br");
    division.appendChild(br2);
    var button = document.createElement("button");
    button.id = "checkBtn";
    button.innerHTML = "Check"
    button.className = "btn btn-info";
    division.appendChild(button);
}