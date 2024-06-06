import { Actor, GraphicsGroup, Vector } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";

export class Enemy extends Actor {
    constructor() {
        super()
    }

    onInitialize(engine) {
        const Enemy = Resources.Enemy.toSprite();
        this.graphics.anchor = new Vector(0,0);
        this.graphics.use(Enemy);
        this.pos = new Vector(600, 100);
        this.vel = new Vector(-300, 0);
        this.scale = new Vector(0.3, 0.3);




    }
}