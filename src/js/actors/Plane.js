import { Resources, ResourceLoader } from "../resources.js";
import { Actor, ImageSource, Sound, Resource, Loader, Vector, Input, Keys } from 'excalibur'
import { Enemy } from "../actors/Enemy.js";

export class Plane extends Actor {

    constructor() {
        super({ width: Resources.Plane.width, height: Resources.Plane.height })
    }

    onInitialize(engine) {
        const Plane = Resources.Plane.toSprite();
        this.graphics.anchor = new Vector(0, 0);
        this.graphics.add(Plane);
        this.pos = new Vector(0, 150);
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
    }

    hitSomething(event){
        if (event.other instanceof Enemy) {
            console.log('hit enemy')
        }
    }
}