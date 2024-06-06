import { Actor, DisplayMode, Vector, GraphicsGroup } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Background extends Actor {

    constructor() {
        super();
    }

    onInitialize(engine) {

        const backgroundImage = Resources.background.toSprite();
        this.graphics.anchor = new Vector(0, 0);
        this.graphics.add(backgroundImage);
        this.pos = new Vector(0, 0);
    }
}