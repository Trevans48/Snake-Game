import SnakeController from "./SnakeController";

abstract class Player {
  protected sc: SnakeController;

  constructor(snakeController: SnakeController) {
    this.sc = snakeController;
  }

  abstract makeTurn(): void;
}

export default Player;