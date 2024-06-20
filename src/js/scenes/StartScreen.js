import { Actor, Scene, DisplayMode, Vector, Label, Color, Font, FontUnit } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js'
import { MainGame } from "./MainGame.js";
import { StartButton } from "../actors/StartButton.js";

export class StartScreen extends Scene {

constructor() {
        super()
    }

    engine

    onInitialize(engine) {

        console.log("Welkom op het startscherm!")

        this.game = engine

        const background = new Actor({
            anchor: new Vector(0, 0),
            pos: new Vector(0, 0),
            scale: new Vector(1.6, 1.6),
        });
        background.graphics.use(Resources.Hangar.toSprite());
        this.add(background);

        const startButton = new StartButton();
        this.add(startButton)

        startButton.on('pointerup', (event) => {
            const mainGame = new MainGame();
            engine.addScene("Game", mainGame);
            engine.goToScene("Game");
          });
    }

    onActivate(ctx) {

        const screenWidth = this.game.drawWidth;
        const screenHeight = this.game.drawHeight;

        this.mylabel = new Label({
            text: `AIR COMBAT`,
            pos: new Vector(screenWidth / 4, screenHeight / 2),
            font: new Font({
                family: 'arial',
                size: 75,
                unit: FontUnit.Px,
                color: Color.White
            }),
        })
        this.add(this.mylabel)
    }
}