let display = document.getElementById("display");
let num1 = "";
let num2 = "";
let op = "";

function press(num) {
    num1 += num;
    display.innerHTML = num1;
}

function setOP(key) {
    op = key;
    num2 = num1;
    num1 = "";
}

function clr() {
    num1 = "";
    num2 = "";
    op = "";
    display.innerHTML = "0";
}

function calculate() {
    let a = parseFloat(num2);
    let b = parseFloat(num1);
    let sum = 0;
    switch(op) {
        case "+":
            sum = a + b;
            break;
        case "-":
            sum = a - b;
            break;
        case "*":
            sum = a * b;
            break;
        case "/":
            sum = a / b;
            break;
    }
    num1 = sum;
    op = "";
    display.innerHTML = sum;
}

// Event Keys Listener
document.addEventListener("keypress", function(event) {
    if(event.key == 1) {
        press(1);
    } else if(event.key == 2) {
        press(2);
    } else if(event.key == 3) {
        press(3);
    } else if(event.key == 4) {
        press(4);
    } else if(event.key == 5) {
        press(5);
    } else if(event.key == 6) {
        press(6);
    } else if(event.key == 7) {
        press(7);
    } else if(event.key == 8) {
        press(8);
    } else if(event.key == 9) {
        press(9);
    } else if(event.key == 0) {
        press(0);
    } else if(event.key == ".") {
        press(".");
    }else if(event.key == "c") {
        clr();
    } else if(event.key == "+") {
        setOP("+");
    } else if(event.key == "-") {
        setOP("-");
    } else if(event.key == "*") {
        setOP("*");
    } else if(event.key == "/") {
        setOP("/");
    } else if(event.key == "=") {
        calculate();
    } else if(event.key == "Enter") {
        calculate();
    }
});

window.addEventListener("load", function(event) {
    document.body.classList.remove('no-fouc');
});