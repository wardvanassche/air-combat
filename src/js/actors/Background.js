import { Actor, Vector } from 'excalibur';
import { Resources } from "../resources.js";

export class Background extends Actor {
    constructor() {
        super({ width: Resources.Background.width, height: Resources.Background.height });
        this.scrollSpeed = -300;
    }

    onInitialize(engine) {

        this.engine = engine

        this.background1 = new Actor({
            width: Resources.Background.width,
            height: Resources.Background.height
        });
        this.background1.graphics.use(Resources.Background.toSprite());
        this.background1.anchor = new Vector(0, 0);
        this.background1.pos = new Vector(0, 0);

        this.background2 = new Actor({
            width: Resources.Background.width,
            height: Resources.Background.height
        });
        this.background2.graphics.use(Resources.Background.toSprite());
        this.background2.anchor = new Vector(0, 0);
        this.background2.pos = new Vector(Resources.Background.width, 0);

        this.addChild(this.background1);
        this.addChild(this.background2);
    }

    onPreUpdate(engine, delta) {
        this.background1.pos.x += this.scrollSpeed * delta / 1000;
        this.background2.pos.x += this.scrollSpeed * delta / 1000;

        if (this.background1.pos.x <= -Resources.Background.width) {
            this.background1.pos.x = this.background2.pos.x + Resources.Background.width;
        }

        if (this.background2.pos.x <= -Resources.Background.width) {
            this.background2.pos.x = this.background1.pos.x + Resources.Background.width;
        }
    }
}
