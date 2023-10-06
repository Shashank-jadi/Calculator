document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let currentOperator = "";
    let previousInput = "";

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function clear() {
        currentInput = "";
        currentOperator = "";
        previousInput = "";
        updateDisplay();
    }

    document.querySelectorAll(".number").forEach(function (button) {
        button.addEventListener("click", function () {
            currentInput += button.textContent;
            updateDisplay();
        });
    });

    document.querySelectorAll(".operator").forEach(function (button) {
        button.addEventListener("click", function () {
            if (currentInput !== "") {
                if (currentOperator !== "") {
                    calculate();
                }
                currentOperator = button.textContent;
                previousInput = currentInput;
                currentInput = "";
                updateDisplay();
            }
        });
    });

    document.getElementById("btn-equal").addEventListener("click", function () {
        calculate();
    });

    document.getElementById("btn-clear").addEventListener("click", function () {
        clear();
    });

    function calculate() {
        if (currentInput !== "" && previousInput !== "") {
            const num1 = parseFloat(previousInput);
            const num2 = parseFloat(currentInput);
            switch (currentOperator) {
                case "+":
                    currentInput = (num1 + num2).toString();
                    break;
                case "-":
                    currentInput = (num1 - num2).toString();
                    break;
                case "*":
                    currentInput = (num1 * num2).toString();
                    break;
                case "/":
                    currentInput = num2 !== 0 ? (num1 / num2).toString() : "Error";
                    break;
            }
            currentOperator = "";
            previousInput = "";
            updateDisplay();
        }
    }
});
