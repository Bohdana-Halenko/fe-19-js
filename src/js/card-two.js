const compareBtn = document.getElementById('compareBtn');
function compareNumbers() {
    const randomC = Math.floor(Math.random() * 11);
    const randomU = parseInt(document.getElementById('userInput').value);
    const result = document.getElementById('resultText');

    if(randomC === randomU) {
        result.textContent = `Вітаю, ви вгадали! Загадане число - ${randomC}.`
    } else if (randomC !== randomU) {
        result.textContent = `Ви не вгадали! Загадане число - ${randomC}.`
    } else {
        alert('Enter a number')
    };
};
compareBtn.addEventListener('click', compareNumbers);