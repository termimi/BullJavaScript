import '../css/style.css';
import { Serpent } from './serpent.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width =80;
const height =80;
let nombrePartie =3;
let snake = new Serpent(0,0,nombrePartie)

let snakeTete ={x:0, y:0};
let serpent =[];
let direction = 'Right';
for(let i =0; i< nombrePartie; i++){
  serpent.push({x:snakeTete.x, y:snakeTete.y});
}
  function Touche(event){
    
    switch (event.key) {
      case 'ArrowUp':
          direction = 'Up'
          console.log('direction');
        break;

      case 'ArrowDown':
      
          direction = 'Down';
        break;

      case 'ArrowLeft':
        direction = 'Left';
        break;

      case 'ArrowRight':  
          direction = 'Right';
        
        break;
    }
  }
const move = () => {
  // Dessine la grille de jeu
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);
  
  snake.drawSnake(width,height,serpent,snakeTete);
  snake.Move(serpent,snakeTete,direction);

 window.addEventListener('keydown', Touche);
  // Rafraichit à chaque seconde
  setTimeout(() => {
    requestAnimationFrame(move);
  }, 700);
};

requestAnimationFrame(move);
