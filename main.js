const displayResult = document.getElementById('result');
let isResultDisplayed = false;

function getValue(result) {
    if (isResultDisplayed) {
        displayResult.value = '';
        isResultDisplayed = false;
    }
    displayResult.value += result;
}

function clearDisplay() {
    displayResult.value = '';
}

function calculateValue(){
    try{
        displayResult.value = eval(displayResult.value);
        isResultDisplayed = true;
    }
    catch(error){
        displayResult.value = 'Error';
        isResultDisplayed = true;
    }
}

function deleteValue() {
    displayResult.value = displayResult.value.slice(0, -1);
}