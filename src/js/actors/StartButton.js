import {Actor, Vector} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class StartButton extends Actor {
    constructor(){
        super({width:Resources.startButton.width, height:Resources.startButton.height})
    }

    onInitialize(engine) {

        this.graphics.use(Resources.startButton.toSprite());
        this.graphics.anchor = new Vector(0,0);

        const centerX = engine.drawWidth / 2 - (this.width * this.scale.x) / 8;
        const centerY = engine.drawHeight / 2 - (this.height * this.scale.y) / 8;

        this.pos = new Vector(centerX, centerY + 100);
        this.scale = new Vector(0.25,0.25)

    }
}