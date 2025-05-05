import { Actor, DisplayMode, Engine, Input, Random, Vector, FadeInOut, Color } from "excalibur"
import { Resources, ResourceLoader } from "./resources.js";
import { StartScreen } from "./scenes/StartScreen.js";
import { MainGame } from "./scenes/MainGame.js";
import { GameOver } from "./scenes/GameOver.js";

export class Game extends Engine {

  constructor() {
    super({
      displayMode: DisplayMode.FillScreen,
    });

    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {

    this.add("MainGame", new MainGame(this.engine))
    this.add("GameOver", new GameOver(this.engine))
    this.addScene("StartScreen", new StartScreen(this.engine))
    this.goToScene("StartScreen")
  }
}

new Game();
