import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {MainGame} from "./scenes/MainGame.js";
import {StartScreen} from "./scenes/StartScreen.js";

export class Game extends Engine {

    constructor() {
        super({
            width: 600,
            height: 320,
            displayMode: DisplayMode.FillScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        this.add("MainGame", new MainGame(this.engine))
        this.add("StartScreen", new StartScreen(this.engine))
        this.goToScene("StartScreen")
    }
}

new Game()