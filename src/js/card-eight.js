document.getElementById('biggestCheck').addEventListener('click', findBiggestNumber);

function findBiggestNumber() {
    const num1 = document.getElementById('biggestNum1').value;
    const num2 = document.getElementById('biggestNum2').value;
    const num3 = document.getElementById('biggestNum3').value;

    const biggestValues = [num1, num2, num3].map(value => {
        if (!isNaN(value) && value.trim() !== '') {
            return Number(value);
        } else {
            document.getElementById('biggestOutp').textContent = 'Введіть коректні числа';
        }
    });

    const max = Math.max(...biggestValues);
    document.getElementById('biggestOutp').textContent = `Найбільше число, яке ви ввели - ${max}`;
}
