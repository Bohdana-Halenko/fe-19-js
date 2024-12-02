const field = document.getElementById('field');
const ball = document.getElementById('ball');

field.addEventListener('click', event => {
    const fieldRect = field.getBoundingClientRect();
    const ballRadius = ball.offsetWidth / 2;

    let x = event.clientX - fieldRect.left - ballRadius;
    let y = event.clientY - fieldRect.top - ballRadius;

    x = Math.max(0, Math.min(x, field.offsetWidth - ball.offsetWidth));
    y = Math.max(0, Math.min(y, field.offsetHeight - ball.offsetHeight));

    ball.style.transform = `translate(${x}px, ${y}px)`;
});
