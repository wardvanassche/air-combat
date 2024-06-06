import {Actor, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import * as ex from "excalibur";


export class StartButton extends Actor {
    constructor(){
        super({width:Resources.startButton.width, height:Resources.startButton.height})
    }

    onInitialize(engine) {

        this.graphics.use(Resources.startButton.toSprite())
        this.pos = new Vector(0,0)
    }
}