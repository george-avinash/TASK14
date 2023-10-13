let currentDisplay = '';

function appendToDisplay(value) {
    currentDisplay += value;
    document.getElementById('display').value = currentDisplay;
}

function clearDisplay() {
    currentDisplay = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        currentDisplay = eval(currentDisplay).toString();
        document.getElementById('display').value = currentDisplay;
    } catch (error) {
        alert('Invalid expression');
        clearDisplay();
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculateResult();
    } else if (/^[0-9+\-*/().]$/.test(event.key)) {
        appendToDisplay(event.key);
    } else {
        alert('Only numbers and operators (+, -, *, /) are allowed');
    }
});

// Implement memory-based operations (M+, M-, MC) using localStorage as needed
