import '../css/style.css';

export class Serpent{
    // position x du serpent
    serpentX;
    // position x du serpent
    serpentY;
    // corps du serpent
    serpentParts = [];
    // nombre de partie du serpent
    nombrePartie;
    // direction du serpent
    direction;
    // etat de vie du serpent
    dead

  constructor(x, y, taillePartie,dead) {
    this.serpentX =x;
    this.serpentY =y;
    this.nombrePartie = taillePartie;
    this.dead = dead;
  }
  // dessine le serpent
  drawSnake(width /*largeur de la tête*/, height /*hauteur de la tête*/, serpentParts /*nombre de partie du serpent*/, snakeTete /*tête du serpents*/) {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    // couleur de la tête
    ctx.fillStyle = 'blue';
    // dessine la tête
    ctx.fillRect(snakeTete.x, snakeTete.y, width, height)
    // dessine le couleur
    for (let i = 0; i < serpentParts.length; i++) {
        // couleur du corps du serpent
        ctx.fillStyle = 'green';
        // dessine le corps du serpents
        ctx.fillRect(serpentParts[i].x, serpentParts[i].y, width, height);
    }
  }
  // mouvement du serpent
  move(serpentParts, tete,direction){
    // valeur par la quelle le serpent se déplacera
    const toMove = 40;
    // tête du serpent
    let teteSerpent ={x:tete.x, y:tete.y};
    // partie 0 du corps du serpent attribuer à la tête du serpent
    serpentParts[0] = teteSerpent;
    // déplacement du corps en fonction de la position 0(tête)
    for(let i = serpentParts.length -1 ; i> 0; i--){
      //mouvement
      serpentParts[i].x = serpentParts[i-1].x;
      serpentParts[i].y = serpentParts[i-1].y;
    }
    // attribution de la position x et y de la tête a la partie 0 du corps
    serpentParts[0] = teteSerpent.x;
    serpentParts[0] = teteSerpent.y;
    // changement de direction du serpent
    switch (direction) {
      case "Up":
        tete.y -=toMove;
          break;
      case "Down":
        tete.y +=toMove;
          break;
      case "Left":
        tete.x -=toMove;
          break;
      case "Right":
        tete.x +=toMove;
          break;
    } 
  }
  // mort du serpent
   serpentDead(snakeTete,serpent){
    // mort du serpent si il touche le bord
    if ((snakeTete.x < 0) || (snakeTete.x >= 800) || (snakeTete.y < 0) || (snakeTete.y >= 800)) {
      this.dead = true;
    }
    // mort du serpent si il se touche lui même
    for(let i = 0; i < serpent.length -1; i++){
      if(snakeTete.x == serpent[i].x && snakeTete.y == serpent[i].y){
        this.dead = true;
      }
    }
    return this.dead;
  }
}
