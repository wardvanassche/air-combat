import { Scene, DisplayMode, Vector, Label, Color, Font, FontUnit } from "excalibur";
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
            text: `Dog Fighters`,
            pos: new Vector(100, 100),
            font: new Font({
                family: 'open sans',
                size: 60,
                unit: FontUnit.Px,
                color:Color.Black
            }),
        })
        this.add(this.mylabel)
    }
}