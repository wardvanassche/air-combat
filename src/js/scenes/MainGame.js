import { Scene, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import {Background} from "../actors/background.js";

export class MainGame extends Scene {

    constructor() {
        super()
    }

    onInitialize(engine) {
        console.log("Start!");
        const map = new Background();
        this.add(map);
    }
}