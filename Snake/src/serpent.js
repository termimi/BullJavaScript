import '../css/style.css';

export class Serpent{
    serpentX;
    serpentY;
    serpentParts = [];
    nombrePartie;
    direction;
    dead

  constructor(x, y, taillePartie,dead) {
    this.serpentX =x;
    this.serpentY =y;
    this.nombrePartie = taillePartie;
    this.dead = dead;
  }
  
  drawSnake(width, height, serpentParts, snakeTete) {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(snakeTete.x, snakeTete.y, width, height)
    for (let i = 0; i < serpentParts.length; i++) {
                  
        
            ctx.fillStyle = 'green';
       
        ctx.fillRect(serpentParts[i].x, serpentParts[i].y, width, height);
    }
  }
  Move(serpentParts, tete,direction){
    const gridSize = 40;
    let teteSerpent ={x:tete.x, y:tete.y};
    serpentParts[0] = teteSerpent;
    
    for(let i = serpentParts.length -1 ; i> 0; i--){
      //mouvement
      serpentParts[i].x = serpentParts[i-1].x;
      serpentParts[i].y = serpentParts[i-1].y;
    }
    serpentParts[0] = teteSerpent.x;
    serpentParts[0] = teteSerpent.y;
    

    switch (direction) {
      case "Up":
        tete.y -=gridSize;
          break;
      case "Down":
        tete.y +=gridSize;
          break;
      case "Left":
        tete.x -=gridSize;
          break;
      case "Right":
        tete.x +=gridSize;
          break;
    } 
  }
   serpentDead(snakeTete,serpent){
  
    if ((snakeTete.x < 0) || (snakeTete.x >= 800) || (snakeTete.y < 0) || (snakeTete.y >= 800)) {
      this.dead = true;
    }
    for(let i = 0; i < serpent.length -1; i++){
      if(snakeTete.x == serpent[i].x && snakeTete.y == serpent[i].y){
        this.dead = true;
      }
    }
    return this.dead;
  }
}
