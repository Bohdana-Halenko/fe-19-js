const compareBtn = document.getElementById('compareBtn');
function compareNumbers() {
    const randomC = Math.floor(Math.random() * 11);
    const randomU = parseInt(document.getElementById('userInput').value);
    const result = document.getElementById('resultText');

    if(randomC === randomU) {
        result.textContent = `Вітаю, ви вгадали число! ${randomC}.`
        result.style.color = '#039900';
    } else if (randomC !== randomU) {
        result.textContent = `Ви програли, комп’ютер загадав ${randomC}.`
        result.style.color = '#990000';
    } else {
        alert('Enter a number')
    };
};
compareBtn.addEventListener('click', compareNumbers);