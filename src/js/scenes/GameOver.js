import {Label, Scene, Color, Font, FontUnit, Vector, TextAlign, BaseAlign} from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { MainGame } from "./MainGame.js";
import {StartScreen} from "./StartScreen.js";

export class GameOver extends Scene {

    constructor() {
        super()
    }

    engine

    onInitialize(engine) {

        this.game = engine
    }

    onActivate(ctx) {

        const screenWidth = this.game.drawWidth;

        const gameOver = new Label({

            text: 'GAME OVER',
            pos: new Vector(screenWidth / 3.5, 250),
            font: new Font({
                family: 'impact',
                size: 100,
                unit: FontUnit.Px,
                color: Color.White
            })
        });
        this.add(gameOver)
    }
}