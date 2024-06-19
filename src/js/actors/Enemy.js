import { Actor, CollisionType, Vector, vec } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import {Cannon} from "./Cannon.js";

export class Enemy extends Actor {
    constructor() {
        super({ width: Resources.Enemy.width, height: Resources.Enemy.height, collisionType: CollisionType.Active });
    }

    score

    onInitialize(engine) {

        this.engine = engine

        const randomNumber = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
        console.log(randomNumber)

        const act = new Actor({})

        act.graphics.use(Resources.Enemy.toSprite())
        this.addChild(act)

        this.pos = new Vector(960, randomNumber)
        this.vel = new Vector(-500, 0)
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