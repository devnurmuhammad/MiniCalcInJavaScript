document.getElementById("num1").innerHTML = Math.floor(Math.random() * 10);
document.getElementById("num2").innerHTML = Math.floor(Math.random() * 10);

var myArray = ["+", "-", "*", "/"];
var randomElement = myArray[Math.floor(Math.random() * myArray.length)];
document.getElementById("operator").innerHTML = randomElement;

function random(){
    document.getElementById("num1").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("num2").innerHTML = Math.floor(Math.random() * 10);

    var myArray = ["+", "-", "*", "/"];
    var randomElement = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById("operator").innerHTML = randomElement;
}

function check(){

    var num1 = parseInt(document.getElementById("num1").innerHTML);
    var num2 = parseInt(document.getElementById("num2").innerHTML);
    var answer = document.getElementById('answer').value;

    var operator = document.getElementById('operator').innerHTML;

    var result;

    switch(operator){
        case "+" : result = num1 + num2; break;
        case "-" : result = num1 - num2; break;
        case '/' : result = num1 / num2; break;
        case '*' : result = num1 * num2; break;
        default :
    }

    if (result == answer)
    {
        window.alert('To\'g\'ri');
    }

    else{
        window.alert('Xato');

    }
}