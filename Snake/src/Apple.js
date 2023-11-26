import '../css/style.css';

export class Apple{
    appleX;
    appleY;
    constructor(x,y){
        this.appleX = x;
        this.appleY = y;
    }

    drawApple(x,y,w,h) {
        let canvas = document.querySelector('canvas');
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = 'red';
        ctx.fillRect(x, y, w, h)
    }
}