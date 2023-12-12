import '../css/style.css';
import { Serpent } from './serpent.js';
import { Apple } from './Apple.js';
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = 40;
const height = 40;
let xApple;
let yApple;
let nombrePartie = 3;
let snake = new Serpent(0, 0, nombrePartie)
let apple = new Apple(xApple, yApple)
let snakeTete = { x: 0, y: 0 };
let serpent = [];
let score = 0;
let direction = 'Right';
let dead = false;
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
function randomApple() {
  xApple = Math.floor(Math.random() * 10) * width;
  yApple = Math.floor(Math.random() * 10) * width;
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
function serpentDead(){
  if ((snakeTete.x < 0) || (snakeTete.x >= 800) || (snakeTete.y < 0) || (snakeTete.y >= 800)) {
    dead = true;
  }
  for(let i = 0; i < serpent.length -1; i++){
    if(snakeTete.x == serpent[i].x && snakeTete.y == serpent[i].y){
      dead = true;
    }
  }
}
randomApple();
const move = () => {
  // Dessine la grille de jeu
  if (!dead) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 800, 800);
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`votre score : ${score}`, 25, 40)
    apple.drawApple(xApple, yApple, width, height);
    snake.Move(serpent, snakeTete, direction);
    if ((snakeTete.x == xApple) && (snakeTete.y == yApple)) {
      score++;
      randomApple();
      serpent.push({ x: snakeTete.x, y: snakeTete.y });
      nombrePartie++;
    }
    serpentDead();
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


