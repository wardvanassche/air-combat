import { Scene, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import {Background} from "../actors/Background.js";

export class MainGame extends Scene {

    constructor() {
        super()
    }

    onInitialize(engine) {
        console.log("Start!");
        const background = new Background();
        this.add(background)
    }
}