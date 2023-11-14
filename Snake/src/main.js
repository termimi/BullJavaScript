import '../css/style.css';
import { Serpent } from './serpent.js';;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let snakeX =400;
let snakeY =400;
let partieSnake =3;
let getApple = true;
const snake = new Serpent(snakeX,snakeY,partieSnake);


const move = () => {

  // Dessine la grille de jeu
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);
  snake.drawSnake();
  snake.MoveRight();
  snake.MoveLeft();
  snake.MoveUP();

   
  // Rafraichit à chaque seconde
  setTimeout(() => {
    requestAnimationFrame(move);
  }, 1000);
};

requestAnimationFrame(move);
