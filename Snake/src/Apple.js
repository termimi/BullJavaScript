import '../css/style.css';

export class Apple{
    // position x de la pomme
    appleX;
    // position y de la pomme
    appleY;
    constructor(x,y){
        this.appleX = x;
        this.appleY = y;
    }
    // dessine de la pomme
    drawApple(x,y,w,h) {
        let canvas = document.querySelector('canvas');
        let ctx = canvas.getContext('2d');
        // couleur de la pomme
        ctx.fillStyle = 'red';
        // position de la pomme
        ctx.fillRect(x, y, w, h)
    }
    // détermination aléatoire de la position de la pomme
    randomApple(width) {
        this.appleX = Math.floor(Math.random() * 10) * width;
        this.appleY = Math.floor(Math.random() * 10) * width;
      }
}