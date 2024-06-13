import { Actor, CollisionType, GraphicsGroup, Vector, vec } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { Enemy } from "./Enemy.js";

export class Cannon extends Actor {
    constructor() {
        super({ width: Resources.Bullet.width, height: Resources.Bullet.height, collisionType: CollisionType.Fixed })
    }

    game
    engine
    score

    onInitialize(engine) {
        this.engine = engine

        const bullet = Resources.Bullet.toSprite();
        this.graphics.use(bullet);
        this.pos = new Vector(100, 100);
        this.vel = new Vector(5000, 0);
        this.scale = new Vector(0.6, 0.6);
        this.on('collisionstart', (event) => this.shot(event))
    }

    shot(event) {
        if (event.other instanceof Enemy) {
            console.log("shot!!!")
            this.engine.currentScene.updateScore()
        }
    }
}