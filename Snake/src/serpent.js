import '../css/style.css';

export class Serpent{
    serpentX;
    serpentY;
    serpentParts = [];
    nombrePartie;
    direction;

  constructor(x, y, taillePartie) {
    this.serpentX =x;
    this.serpentY =y;
    this.nombrePartie = taillePartie;
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
      
    let teteSerpent ={x:tete.x, y:tete.y};
    serpentParts[0] = teteSerpent;
    
    for(let i = serpentParts.length -1 ; i> 0; i--){
      //mouvement
      serpentParts[i].x = serpentParts[i-1].x;
      serpentParts[i].y = serpentParts[i-1].y;
    }
    serpentParts[0] = teteSerpent.x;
    serpentParts[0] = teteSerpent.y;
    console.log(tete.x);

    switch (direction) {
      case "Up":
        tete.y -=80;
          break;
      case "Down":
        tete.y +=80;
          break;
      case "Left":
        tete.x -=80;
          break;
      case "Right":
        tete.x +=80;
          break;
    } 
  }
}
