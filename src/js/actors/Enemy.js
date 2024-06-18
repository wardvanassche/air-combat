import { Actor, CollisionType, GraphicsGroup, Vector, vec } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import {Cannon} from "./Cannon.js";

export class Enemy extends Actor {
    constructor() {
        super({ width: Resources.Enemy.width, height: Resources.Enemy.height, collisionType: CollisionType.Active });
    }

    score

    onInitialize(engine) {

        this.engine = engine

        const Enemy = Resources.Enemy.toSprite();
        this.graphics.add(Enemy)
        this.pos = new Vector(800, 300);
        this.vel = new Vector(-300, 0);
        this.scale = new Vector(0.4, 0.4);
        this.on("exitviewport", (event) => this.exitView());
        this.on('collisionstart', (event) => this.shot(event))
    }

    shot(event) {
        if (event.other instanceof Cannon) {
            console.log("shot!!!")
            this.kill();
            this.engine.currentScene.updateScore()
        }
    }

    exitView(event) {
        this.kill();
        this.engine.currentScene.updateScore()
    }
}