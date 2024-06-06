import {Actor, Vector} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class StartButton extends Actor {
    constructor(){
        super({width:Resources.StartButton.width, height:Resources.StartButton.height})
    }

    onInitialize(engine) {

        this.graphics.use(Resources.StartButton.toSprite());
        this.graphics.anchor = new Vector(0,0);

        const centerX = engine.drawWidth / 2 - (this.width * this.scale.x) / 8;
        const centerY = engine.drawHeight / 2 - (this.height * this.scale.y) / 8;

        this.pos = new Vector(centerX, centerY + 155);
        this.scale = new Vector(0.25,0.25)

    }
}