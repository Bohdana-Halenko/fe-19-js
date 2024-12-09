

let operation = '';

function setOperation(op) {
  operation = op;
}

function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result = '';

  if (isNaN(num1) || isNaN(num2)) {
    result = 'Помилка';
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
        result = num2 !== 0 ? num1 / num2 : 'Ділення на 0';
        break;
      default:
        result = 'Оберіть операцію';
    }
  }

  document.getElementById('result').value = result;
}