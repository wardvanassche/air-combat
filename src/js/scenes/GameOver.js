import { Label, Scene, Color, Font, FontUnit, Vector } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { MainGame } from "./MainGame.js";

export class GameOver extends Scene {

    constructor() {
        super()
    }

    engine
    score

    onInitialize(engine) {
        console.log("Game Over!");

        this.game = engine

        this.game.toggleDebug()
    }

    onActivate(ctx) {

        const screenWidth = this.game.drawWidth;
        const screenHeight = this.game.drawHeight;

        this.score = 0;

        this.scoreLabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(screenWidth / 2, screenHeight / 2),
            font: new Font({
                family: 'impact',
                size: 25,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.add(this.scoreLabel)

        this.restartLabel = new Label({
            text: `BACK`,
            pos: new Vector(screenWidth / 2, 350),
            font: new Font({
                family: 'impact',
                size: 25,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.add(this.restartLabel)
    }
}   