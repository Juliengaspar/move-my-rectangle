import {Rectangle} from "../../framework25/shapes/Rectangle";
import {Hsl} from "../../framework25/colors/Hsl";
import {settings} from "./settings";





const app = {
    init(){
        console.log("hello")
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        console.log(this.ctx);

        this.resizeCanvas();
        this.rect = new Rectangle(this.ctx, {
            x: this.canvas.width/2,
            y: this.canvas.height/2
        },
            new Hsl(223, 56, 76),
            settings.rect.width,
            settings.rect.height
        );
        this.rect.draw();
        this.addEventListeners();
    },
    addEventListeners(){
        window.addEventListener('resize', ()=>{
        this.resizeCanvas();

        });
    },
     resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
}
}
app.init();