import { Actor, DisplayMode, Engine, Input, Random, Vector, FadeInOut, Color } from "excalibur"
import { Resources, ResourceLoader } from "./resources.js";
import { StartScreen } from "./scenes/StartScreen.js";
import { MainGame } from "./scenes/MainGame.js";
import { GameOver } from "./scenes/GameOver.js";

export class Game extends Engine {

  constructor() {
    super({ width: 960, height: 540, displayMode: DisplayMode.FitScreen });
    this.start(ResourceLoader).then(() => this.startGame());
  }
  
  startGame() {

    let transitions = {
      in: new FadeInOut({ duration: 400, direction: 'in', color: Color.Black }),
      out: new FadeInOut({ duration: 400, direction: 'out', color: Color.Black })
    }

    this.add("GameOver", new GameOver(this.engine))
    this.add('MainGame', { scene: new MainGame(), transitions })
    this.add('StartScreen', { scene: new StartScreen(), transitions })
    this.goToScene("StartScreen");
  }
}

new Game();