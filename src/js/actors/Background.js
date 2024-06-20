import { Actor, Vector, GraphicsGroup } from 'excalibur';
import { Resources, ResourceLoader } from "../resources.js";

export class Background extends Actor {
    constructor() {
        super({width: Resources.Background.width, height: Resources.Background.height})
    }

    // voegt de Background toe aan de scene dmv een actor
    onInitialize(engine) {

        const backgroundImage = Resources.Background.toSprite()
        this.graphics.add(backgroundImage)
        // zorgt ervoor dat de achtergrond beweegt
        this.graphics.anchor = new Vector(0, 0)
        this.graphics.add(backgroundImage)
        this.vel = new Vector(-300, 0)
    }
}