import { Resources, ResourceLoader } from "../resources.js";
import { Actor, ImageSource, Sound, Resource, Loader, Vector, Input, Keys, Engine, DisplayMode, CollisionType } from 'excalibur'
import { Enemy } from "../actors/Enemy.js";
import { GameOver } from "../scenes/GameOver.js";
import { Cannon } from "./Cannon.js";

export class Plane extends Actor {

    constructor() {
        super({ width: Resources.Plane.width, height: Resources.Plane.height })
    }

    game
    engine
    score
    
    onInitialize(engine) {

        this.engine = engine

        const engineHeight = engine.drawHeight;
        const Plane = Resources.Plane.toSprite();
        this.graphics.use(Plane);
        this.pos = new Vector(100, engineHeight / 2);
        this.vel = new Vector(0, 0);
        this.scale = new Vector(0.2, 0.2);

        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    onPreUpdate(engine) {
        let xSpeed = 0;
        let ySpeed = 0;

        if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
            ySpeed = -600;
        }

        if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
            ySpeed = 600;
        }

        this.vel = new Vector(xSpeed, ySpeed);

        const cannon = new Cannon();
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.addChild(cannon)
        }
    }

    hitSomething(event) {

        if (event.other instanceof Enemy) {
            this.scene.engine.goToScene('GameOver')
        }
    }

    onPostUpdate(engine, _delta) {
        super.onPostUpdate(engine, _delta);
        if (this.pos.y < 0) {
            this.pos = new Vector(this.pos.x, 0);
        }
        if (this.pos.y > engine.drawHeight - this.height * this.scale.y) {
            this.pos = new Vector(this.pos.x, engine.drawHeight - this.height * this.scale.y);
        }
    }
}