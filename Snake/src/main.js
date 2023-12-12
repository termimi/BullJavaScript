import '../css/style.css';
// import de la classe serpent
import { Serpent } from './serpent.js';
// import de la casse apple
import { Apple } from './Apple.js';
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// largeur du carré de la pomme et du serpent
const width = 40;
// hauteur du carré de la pomme et du serpent
const height = 40;
// position x de la pomme 
let xApple;
// position y de la pomme
let yApple;
// taille en carré du serpent
let nombrePartie = 3;
let dead = false;
let snake = new Serpent(0, 0, nombrePartie,dead)
let apple = new Apple(xApple, yApple)
let snakeTete = { x: 0, y: 0 };
let serpent = [];
let score = 0;
let direction = 'Right';
for (let i = 0; i < nombrePartie; i++) {
  serpent.push({ x: snakeTete.x, y: snakeTete.y });
}
function Touche(event) {

  switch (event.key) {
    case 'ArrowUp':
      if (direction != 'Down') {
        direction = 'Up'
      }
      break;

    case 'ArrowDown':
      if (direction != 'Up') {
        direction = 'Down';
      }
      break;

    case 'ArrowLeft':
      if (direction != 'Right') {
        direction = 'Left';
      }
      break;

    case 'ArrowRight':
      if (direction != 'Left') {
        direction = 'Right';
      }
      break;
  }
}

function deadMenu() {
  if (dead) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 800, 800);
    ctx.fillStyle = 'white';
    ctx.font = '45px Arial';
    ctx.fillText(`votre score : ${score}`, 200, 300)
    ctx.fillText(`Appuyer sur F5 pour rejouer`, 200, 400)
  }
}

apple.randomApple(width);
const move = () => {
  // Dessine la grille de jeu
  if (!dead) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 800, 800);
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`votre score : ${score}`, 25, 40)
    apple.drawApple(apple.appleX, apple.appleY, width, height);
    snake.Move(serpent, snakeTete, direction);
    if ((snakeTete.x == apple.appleX) && (snakeTete.y == apple.appleY)) {
      score++;
      apple.randomApple(width);
      serpent.push({ x: snakeTete.x, y: snakeTete.y });
      nombrePartie++;
    }
    dead = snake.serpentDead(snakeTete,serpent);
    snake.drawSnake(width, height, serpent, snakeTete);
  }
  deadMenu();
  window.addEventListener('keydown', Touche);
  // Rafraichit à chaque seconde
  setTimeout(() => {
    requestAnimationFrame(move);
  }, 100);
};

requestAnimationFrame(move);


