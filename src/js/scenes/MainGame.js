import { Resources, ResourceLoader } from "../resources.js";
import { Actor, Engine, Random, Timer, Vector, Label, Color, Font, FontUnit, Scene, DisplayMode } from "excalibur";
import { StartScreen } from "./StartScreen.js";
import { Background } from "../actors/Background.js";
import { Plane } from "../actors/Plane.js";
import { Enemy } from "../actors/Enemy.js";
import { Enemy1 } from "../actors/Enemy1.js";
import { GameOver} from "./GameOver.js";

export class MainGame extends Scene {

    constructor() {
        super();
    }

    game
    engine
    score
    scoreLabel

    onInitialize(engine) {
       console.log("start!")

       this.engine = engine

        this.timer = new Timer({
            fcn: () => this.spawnEnemy(Engine),
            interval: 1200,
            repeats: true
        })
        engine.add(this.timer)
        this.timer.start()
    }

    onActivate(ctx) {

        const Sky = new Background()
        this.add(Sky)

        const Player = new Plane()
        this.add(Player)

        const Opponent = new Enemy()
        this.add(Opponent)

        const Opponent2 = new Enemy1()
        this.add(Opponent2)

        this.score = 0;

        this.scoreLabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(425, 25),
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px,
                color:Color.White
            }),
        })
        this.add(this.scoreLabel)
    }

    updateScore() {
        this.score++
        this.scoreLabel.text = `Score: ${this.score}`
    }

    spawnEnemy() {
        const Opponent = new Enemy()
        this.add(Opponent)
    }

    checkGameOver() {
        this.timer.stop()
        this.engine.goToScene("GameOver")
    }
}