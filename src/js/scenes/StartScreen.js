import { Actor, Scene, DisplayMode, Vector, Label, Color, Font, FontUnit } from "excalibur";
import * as ex from "excalibur";
import { Resources, ResourceLoader } from '../resources.js'
import { MainGame } from "./MainGame.js";
import { StartButton } from "../actors/StartButton.js";

export class StartScreen extends Scene {

    constructor() {
        super()
    }

    engine

    onInitialize(engine) {

        this.game = engine

        const background = new Actor({
            anchor: new Vector(0, 0),
            pos: new Vector(-270, 0),
            scale: new Vector(0.2, 0.2),
        });
        background.graphics.use(Resources.Hangar.toSprite());
        this.add(background);

        console.log("Welkom op het startscherm!")


        const startButton = new StartButton();
        this.add(startButton)

        startButton.on('pointerup', (event) => {
            engine.addScene("Game", MainGame)
            engine.goToScene("Game")
          });
    }

    onActivate(ctx) {

        this.mylabel = new Label({
            text: `AIR COMBAT`,
            pos: new Vector(550, 850),
            font: new Font({
                family: 'arial',
                size: 75,
                unit: FontUnit.Px,
                color:Color.Black
            }),
        })
        this.add(this.mylabel)
    }
}