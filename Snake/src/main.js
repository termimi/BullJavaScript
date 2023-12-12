// import des classes et fichier nécessaire au jeu
import '../css/style.css';
// import de la classe serpent
import { Serpent } from './serpent.js';
// import de la casse apple
import { Apple } from './Apple.js';

// déclaration des variable de base du jeu
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
let defaultNumbersOfParts = 3;
// état de vie du serpent
let dead = false;
// tableau contenant le corps du serpent
let serpent = [];
// score du joueur
let score = 0;
// direction dans la quelle se trouve le serpent
let direction = 'Right';

// instanciation des objets
// instanciation de l'objet serpent 
let snake = new Serpent(0, 0, defaultNumbersOfParts,dead)
// instanciation de l'objet pomme
let apple = new Apple(xApple, yApple)
// instanciation de l'objet tête de serpent
let snakeTete = { x: 0, y: 0 };

// début du programme
// ajout du nombre du nombre de carré composant le serpent
for (let i = 0; i < defaultNumbersOfParts; i++) {
  serpent.push({ x: snakeTete.x, y: snakeTete.y });
}
// prise en compte des touche du joueur
function Touche(event) {

  switch (event.key) {
    // change la direction du serpent vers le haut si la flèche du haut est touché
    case 'ArrowUp':
      if (direction != 'Down') {
        direction = 'Up'
      }
      break;
    // change la direction du serpent vers le bas si la flèche du bas est touché
    case 'ArrowDown':
      if (direction != 'Up') {
        direction = 'Down';
      }
      break;
   // change la direction du serpent vers la gauche si la flèche de gauche est touché
    case 'ArrowLeft':
      if (direction != 'Right') {
        direction = 'Left';
      }
      break;
   // change la direction du serpent vers la droite si la flèche de droite est touché
    case 'ArrowRight':
      if (direction != 'Left') {
        direction = 'Right';
      }
      break;
  }
}
// menu dans le cas où le joueur meurt
function deadMenu() {
  if (dead) {
    // couleur du carré d'affichage
    ctx.fillStyle = 'black';
    // largeur du carré d'affichage
    ctx.fillRect(0, 0, 800, 800);
    // couleur des lettres du text
    ctx.fillStyle = 'white';
    // taille du text
    ctx.font = '45px Arial';
    // affichage du score
    ctx.fillText(`votre score : ${score}`, 200, 300)
    // affichage des instructions
    ctx.fillText(`Appuyer sur F5 pour rejouer`, 200, 400)
  }
}
// choix d'une position aléatoire pour la pomme 
apple.randomApple(width);
const move = () => {
  // Dessine la grille de jeu
  if (!dead) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 800, 800);
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    // affichage du score
    ctx.fillText(`votre score : ${score}`, 25, 40)
    // dessine la pomme
    apple.drawApple(apple.appleX, apple.appleY, width, height);
    // bouge le serpent
    snake.Move(serpent, snakeTete, direction);
    // bloc d'instruction dans la cas ou le serpent touche la pomme
    if ((snakeTete.x == apple.appleX) && (snakeTete.y == apple.appleY)) {
      // ajout de plus 1 au score
      score++;
      // nouvelle position pour la pomme 
      apple.randomApple(width);
      // ajout d'un carré au serpent
      serpent.push({ x: snakeTete.x, y: snakeTete.y });
    }
    // verifie si le serpent est mort
    dead = snake.serpentDead(snakeTete,serpent);
    // affichage du serpent
    snake.drawSnake(width, height, serpent, snakeTete);
  }
  // affichage du menu "GameOver"
  deadMenu();
  // ajout de la prise en compte des touche de l'utilisateur
  window.addEventListener('keydown', Touche);
  // Rafraichit à chaque seconde
  setTimeout(() => {
    requestAnimationFrame(move);
  }, 100);
};

requestAnimationFrame(move);


