import { Resources, ResourceLoader } from "../resources.js";
import {Actor, Engine, Random, Timer, Vector, Label, Color, Font, FontUnit, Scene } from "excalibur";
import { StartScreen } from "./StartScreen.js";
import { Background } from "../actors/Background.js";
import { Plane } from "../actors/Plane.js";

export class MainGame extends Scene {

    constructor() {
        super();
    }

    game
    engine
    score
    lives
    mylabel

    onInitialize(Engine) {
       console.log("start!")

       this.game = Engine
    }

    onActivate(ctx) {
        const Sky = new Background()
        this.add(Sky)

        const Player = new Plane()
        this.add(Player)

        this.score = 0;
        this.mylabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(50, 50),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.White
            }),
        })
        this.add(this.mylabel)
    }
}