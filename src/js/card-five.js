const inputElement = document.querySelector('.time__calculator_input');
const buttonElement = document.querySelector('.time__calculator_btn');
const resultElement = document.querySelector('.time__calculator_text');

// Додаємо обробник події для кнопки
buttonElement.addEventListener('click', () => {
const inputValue = inputElement.value;

if (!inputValue || isNaN(inputValue) || inputValue < 0) {
    resultElement.textContent = 'Будь ласка, введіть коректне число!';
    return;
}

const totalMinutes = parseInt(inputValue, 10);

    const days = Math.floor(totalMinutes / (24 * 60));
    const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
    const minutes = totalMinutes % 60;

resultElement.textContent = `${days} дн. ${hours} : ${minutes}`;
});
