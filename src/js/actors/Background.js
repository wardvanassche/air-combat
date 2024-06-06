import { Actor, Vector } from 'excalibur';
import { Resources } from '../resources.js';

export class Background extends Actor {
    constructor() {
        super();
    }

    onInitialize(engine) {

        const backgroundImage = Resources.background.toSprite();
        this.graphics.anchor = new Vector(0, 0);
        this.graphics.add(backgroundImage);
        this.pos = new Vector(0, 0);
        this.vel = new Vector(-100, 0);
    }
}
