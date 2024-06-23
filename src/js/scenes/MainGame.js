import { Resources, ResourceLoader } from "../resources.js";
import { Actor, Engine, Random, Timer, Vector, Label, Color, Font, FontUnit, Scene, DisplayMode } from "excalibur";
import { StartScreen } from "./StartScreen.js";
import { Background } from "../actors/Background.js";
import { Plane } from "../actors/Plane.js";
import { Enemy } from "../actors/Enemy.js";
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

       this.game = engine

        const Sky = new Background()
        this.add(Sky)

        this.timer = new Timer({
            fcn: () => this.spawnEnemy(Engine),
            interval: 1100,
            repeats: true
        })
        engine.add(this.timer)
        this.timer.start()

        this.timer2 = new Timer({
            fcn: () => this.spawnEnemy2(Engine),
            interval: 2800,
            repeats: true
        })
        engine.add(this.timer2)
        this.timer2.start()
    }

    onActivate(ctx) {

        const Player = new Plane()
        this.add(Player)

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
        const Enemy1 = new Enemy(Color.Red)
        this.add(Enemy1)
    }

    spawnEnemy2() {
        const Enemy2 = new Enemy(Color.White)
        this.add(Enemy2)
    }

    checkGameOver() {
        this.timer.stop()

        let data = {
            score: this.score
        }
        localStorage.setItem("score", JSON.stringify(data))

        this.engine.goToScene("GameOver")
    }
}