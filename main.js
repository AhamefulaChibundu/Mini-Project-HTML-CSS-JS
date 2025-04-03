const display = document.getElementById("display");

function addToDisplay(myInput) {
    display.value += myInput;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}