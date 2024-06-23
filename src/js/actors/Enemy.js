import { Actor, CollisionType, Vector, Color, vec } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { Cannon } from "./Cannon.js";

export class Enemy extends Actor {
    constructor(color = Color.Red) {
        super({
            width: Resources.Enemy.width,
            height: Resources.Enemy.height,
            collisionType: CollisionType.Active
        });
        this.color = color;
    }

    onInitialize(engine) {
        this.game = engine

        const randomNumber = Math.floor(Math.random() * (500 - 100 + 1)) + 100;

        const enemySprite = Resources.Enemy.toSprite();
        enemySprite.tint = this.color;
        this.graphics.use(enemySprite);

        this.pos = new Vector(960, randomNumber);
        this.vel = new Vector(-600, 0);
        this.scale = new Vector(0.4, 0.4);

        this.on("exitviewport", (event) => this.exitView());
        this.on('collisionstart', (event) => this.shot(event));
    }

    shot(event) {
        if (event.other instanceof Cannon) {
            console.log("shot!!!");
            this.kill();
            this.game.currentScene.updateScore();
        }
    }

    exitView(event) {
        this.kill();
        this.game.currentScene.updateScore();
    }
}
