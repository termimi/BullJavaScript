import '../css/style.css';
import { Serpent } from './serpent.js';
import { Apple } from './Apple.js';
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width =40;
const height =40;
let x;
let y;
let nombrePartie =3;
let snake = new Serpent(0,0,nombrePartie)
let apple = new Apple(x,y)
let snakeTete ={x:0, y:0};
let serpent =[];
let score =0;
let direction = 'Right';
for(let i =0; i< nombrePartie; i++){
  serpent.push({x:snakeTete.x, y:snakeTete.y});
}
  function Touche(event){
    
    switch (event.key) {
      case 'ArrowUp':
        if(direction !='Down'){
          direction = 'Up'
        }
        break;

      case 'ArrowDown':
        if(direction !='Up'){
          direction = 'Down';
        }
        break;

      case 'ArrowLeft':
        if(direction !='Right'){
          direction = 'Left';
        }
        break;

      case 'ArrowRight':  
        if(direction !='Left'){
          direction = 'Right';
        }
        break;
    }
  }
  function randomApple(){
    x = Math.floor(Math.random() * 10) * width;
    y = Math.floor(Math.random() * 10) * width;
  }
  randomApple();
const move = () => {
  // Dessine la grille de jeu
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);
  ctx.fillStyle = 'white';
  ctx.font ='20px Arial';
  ctx.fillText(`votre score : ${score}`,25,40)
  apple.drawApple(x,y,width,height);
  snake.drawSnake(width,height,serpent,snakeTete);
  snake.Move(serpent,snakeTete,direction);
  if((snakeTete.x == x) && (snakeTete.y == y)){
    score++;
    randomApple();
  }
  

 window.addEventListener('keydown', Touche);
  // Rafraichit à chaque seconde
  setTimeout(() => {
    requestAnimationFrame(move);
  }, 120);
};

requestAnimationFrame(move);

/// regler le pblm de l'emplacement de la pomme;
