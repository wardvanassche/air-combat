import { Scene, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class gameScherm extends Scene {

    constructor() {
        super({
            width: 1280,
            height: 960,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
    }

    onInitialize(engine) {
        console.log("Start!")
    }
}