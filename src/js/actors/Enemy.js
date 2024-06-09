import { Actor, GraphicsGroup, Vector } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";

export class Enemy extends Actor {
    constructor() {
        super({ width: Resources.Enemy.width, height: Resources.Enemy.height })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Enemy.toSprite())
        this.graphics.anchor = new Vector(0,0);
        this.pos = new Vector(600, 100);
        this.vel = new Vector(-300, 0);
        this.scale = new Vector(0.3, 0.3);

        this.on("exitviewport", (event) => this.exitView())
    }

    exitView(event){
        this.kill()
    }
}