import { Resources, ResourceLoader } from "../resources.js";
import { Actor, ImageSource, Sound, Resource, Loader, Vector, Input, Keys } from 'excalibur'

export class Plane extends Actor {

    constructor() {
        super()
    }

    onInitialize(engine) {
        const Plane = Resources.Plane.toSprite();
        this.graphics.anchor = new Vector(0, 0);
        this.graphics.add(Plane);
        this.pos = new Vector(0, 150);
        this.vel = new Vector(0, 0);
        this.scale = new Vector(0.5, 0.5);
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -600;
        }

        if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = 600;
        }

        this.vel = new Vector(xspeed, yspeed);
    }
}