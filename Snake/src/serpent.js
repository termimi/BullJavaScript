import '../css/style.css';

export class Serpent{
    serpentX;
    serpentY;
    serpentParts = [];

  constructor(x, y, taillePartie) {
    this.serpentX =x;
    this.serpentY = y;
    this.taillePartie = taillePartie;
    for (let i = 0; i < taillePartie; i++) {
        this.serpentParts.push({ x: this.serpentX + i * 80, y: this.serpentY });
    }
  }

  drawSnake() {
        for(let i =0; i< this.serpentParts.length; i++){
        let canvas = document.querySelector('canvas');
        let ctx = canvas.getContext('2d');
        if(i ==0){
            ctx.fillStyle = 'blue';
        }
        else{
            ctx.fillStyle = 'green';
        }
        ctx.fillRect(this.serpentX + i*80, this.serpentY, 80, 80);
    }
  }
  MoveRight(){
    this.serpentParts.push({ x: this.serpentX +=80 , y: this.serpentY });

    // Si le tableau a atteint la taille maximale, retire la première partie
    if (this.serpentParts.length > this.taillePartie) {
      this.serpentParts.shift();
    }
  }
  MoveLeft(){
    this.serpentParts.push({ x: this.serpentX -=80 , y: this.serpentY });

    // Si le tableau a atteint la taille maximale, retire la première partie
    if (this.serpentParts.length > this.taillePartie) {
      this.serpentParts.pop();
    }
  }
  MoveUP(){
    this.serpentParts.push({ x: this.serpentX, y: this.serpentY -=80 });

    // Si le tableau a atteint la taille maximale, retire la première partie
    if (this.serpentParts.length > this.taillePartie) {
      this.serpentParts.pop();
    }
  }

  
  
}
