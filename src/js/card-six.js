const dino = document.qwerySelector('.dino');
const player = document.qwerySelector('.dino__player');
const cactus = document.qwerySelector('.dino__cactus');
const pointsEl = document.qwerySelector('.dino__points');
const overlayEl = document.qwerySelector('.dino__overlay');
const resultsEl = document.qwerySelector('.dino__results');
const butEl = document.qwerySelector('.dino__but');

let x = Math.floor(player.getBoundingClient().x + player.getBoundingClientRect().width / 2)
let y = Math.floor(player.getBoundingClient().y + player.getBoundingClientRect().width / 2)

let points = 0;
let IsAnimating = false;
let timer1;
let timer2;
let timer3;

const resetGame = () => {
  player.style.left = '100px';
  player.style.bottom = '15px';
  cactus.style.right = '-70px';
  cactus.style.bottom = '15px';
  points = 0;
}

const cactusRun = () => {
  cactus.style.right = `${Number(cactus.style.right.split('px')[0]) + 8 + points * 0.05}px`;
   x = Math.floor(cactus.getBoundingClient().x + cactus.getBoundingClientRect().width / 2)
   y = Math.floor(cactus.getBoundingClient().y + cactus.getBoundingClientRect().width / 2)
   if (x < 0) {
    cactus.style.display = 'none';
    cactus.style.right = '-70px';
    setTimeout(() => cactus.style.display = 'block', 200);
   }
}

const checkCollision = () => {
  const playerRect = player.getBoundingClientRect();
  const cactusRect = cactus.getBoundingClientRect();

  const playerX = Math.floor(playerRect.x);
  const playerY = Math.floor(playerRect.y);
  const playerWidth = Math.floor(playerRect.width);
  const playerHeighth = Math.floor(playerRect.height);

  const cactusX = Math.floor(cactusRect.x);
  const cactusY = Math.floor(cactusRect.y);
  const cactusWidth = Math.floor(cactusRect.width);
  const cactusHeighth = Math.floor(cactusRect.height);

  if(playerX < cactusX + cactusWidth &&
     playerX + playerWidth > cactus &&
     playerY < cactusY + cactusHeighth &&
     playerY + playerHeighth > cactusY 
    ) {
      overlayEl.style.display = 'flex';
      player.style.display = 'none';
      pointsEl.style.display = 'none';
      butEl.style.display = 'flex';

      if(points >= localStorage.getItem('dinoRecord')) localStorage.setItem('DinoRecord', points)
      resultsEl.innerHTML = `
      Game over
      <br>
      ${points} points
      <br>
      Record ${localStorage.getItem('dinoRecord')}`;

      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      resetGame();

    }
};

document.addEventListener('keydown', (e) => {
  if(e.key === 'n' && !IsAnimating) {
    IsAnimating = true;
    player.style.bottom = '100px'
    setTimeout(() => player.style.bottom = '15px', 400)
    setTimeout(() => IsAnimating = false, 600);
  }
});

butEl.addEventListener('click',() => {
  overlayEl.style.display = 'none';
  player.style.display = 'block';
  pointsEl.style.display ='block';
  timer1 = setInterval(cactusRun, 30);
  timer2 = setInterval(checkCollision, 100)
  timer3 = setInterval(() => {
    points += 1;
    pointsEl.innerHTML = `${points} points`;
  }, 50)
});

const startGame = (e) => {
  if(e.key === 'g') {
    overlayEl.style.display = 'none';
    overlayEl.style.backgroundColor = 'rgha(0, 0, 0, 0.7)';
    timer1 = setInterval(cactusRun, 30);
    timer2 = setInterval(checkCollision, 100)
    timer3 = setInterval(() => {
      points += 1;
      pointsEl.innerHTML = `${points} points`;
    }, 50)

    document.removeEventListener('keydown',startGame)
  }
};

document.addEventListener('keydown',startGame);

resultsEl = `Press 'g' to start game 
<br>
Press 'n' to jump
<br>
Record ${localStorage.getItem('dinoRecord') === null ? 0 : localStorage.getItem('dinoRecord')}`;
