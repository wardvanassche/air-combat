import { Scene, DisplayMode } from "excalibur";
import * as ex from "excalibur";
import { Resources, ResourceLoader } from '../resources.js'
import { MainGame } from "./MainGame.js";
import { StartButton } from "../actors/startButton.js";

export class startScherm extends Scene {

    constructor() {
        super()
    }

    onInitialize(engine) {

        console.log("Welkom op het startscherm!")

        const startButton = new StartButton();
        this.add(startButton)

        startButton.on('pointerup', (event) => {
            engine.addScene("MainGame", MainGame)
            engine.goToScene("MainGame")
          });
    }
}