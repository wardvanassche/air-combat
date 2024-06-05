import { Scene, DisplayMode } from "excalibur";
import * as ex from "excalibur";
import { Resources, ResourceLoader } from './resources.js'
import { gameScherm } from "./gameScherm.js";

export class startScherm extends Scene {

    constructor() {
        super({
            width: 1280,
            height: 960,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
    }

    onInitialize(engine) {

        console.log("Welkom op het startscherm!")

        const StartButton = new ex.Actor({
            x: 640,
            y: 500,
        })
        StartButton.graphics.use(Resources.StartButton.toSprite())
        StartButton.scale = new ex.Vector(0.5, 0.5)
        this.add(StartButton)

        StartButton.on('pointerup', (event) => {
            engine.addScene("Game", gameScherm)
            engine.goToScene("Game")
          });
    }
}