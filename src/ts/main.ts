import {Rectangle} from "../../framework25/shapes/Rectangle";
import {Hsl} from "../../framework25/colors/Hsl";
import {settings} from "./settings";
import {randomFloat, randomInt} from "../../framework25/helpers/random";

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
            //mettre un couleur aleatoire
            new Hsl(randomInt(0,360), randomInt(0, 100), randomInt(0, 100)),
            settings.rect.width,
            settings.rect.height,
            randomFloat(0, Math.PI*2)
        );
        this.intervalId = setInterval(this.update.bind(this), 10);
        this.rect.draw();
        this.addEventListeners();

    //requestAnimationFrame(this.update.bind(this));
    },


    update(){
        //on le fait bouger le rectangle
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        //tester que quand la rectangle sort de la fenêtre
        if(this.rect.position.x>= this.canvas.width + this.rect.width/2){
            //faire changer la couleur du rectangale a chaque fois qu'il revient
            this.rect.color = new Hsl(randomInt(0,360),randomInt(50, 100), randomInt(50, 100))
            //faire en sorte qui apparait de manier aleatory sur l'axe y
            this.rect.position.y = randomInt(this.rect.height/2, this.canvas.height - this.rect.width/2);
            //permet que le rectangel revient de l'autre coté aux pixel parfait
        this.rect.position.x = -this.rect.width/2
        }
    // this.rect.position.x++;
    // this.rect.position.y++;
        //la même chose mais avec la trigonometrie
        this.rect.position.x +=  Math.cos(this.rect.rotation) * settings.rect.step;//pour l'angle de alpha
        this.rect.position.y +=  Math.cos(this.rect.rotation) * settings.rect.step;//pour l'angle de alpha
    this.rect.draw();
    //les rectangle bouge vite
    //requestAnimationFrame(this.update.bind(this));
    },
    addEventListeners(){
        window.addEventListener('resize', ()=>{
        this.resizeCanvas();

        });
        window.addEventListener('mousemove', (evt)=>{
            const dx = evt.clientX -this.rect.position.x;
            const dy = evt.clientY -this.rect.position.y;
            this.rect.rotation = Math.atan2(dy, dx);
           // console.log(Math.atan2(evt.clientY, evt.clientX));
        });
    },
     resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
}
}
app.init();