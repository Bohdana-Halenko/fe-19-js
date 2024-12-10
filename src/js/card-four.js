document.addEventListener('DOMContentLoaded', () => {
  let operation = ''; 

  window.setOperation = function setOperation(op) {
    operation = op;
  };

  window.calculate = function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result = '';

    if (isNaN(num1) || isNaN(num2)) {
      result = 'Помилка: введіть числа';
    } else {
      switch (operation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num2 !== 0 ? num1 / num2 : 'Помилка: ділення на 0';
          break;
        default:
          result = 'Помилка: оберіть операцію';
      }
    }

    document.getElementById('result').value = result;
  };
});
// const equal = document.querySelector('.calculator__equal-btn');
// equal.addEventListener('click', calculate());