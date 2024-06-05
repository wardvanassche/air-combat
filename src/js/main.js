import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { startScherm } from './startScherm.js';
import { gameScherm } from './gameScherm.js';

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 960,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene("gameScherm", new gameScherm(this.engine))
        this.addScene("startScherm", new startScherm(this.engine))
        this.goToScene("startScherm");
    }
}

new Game()