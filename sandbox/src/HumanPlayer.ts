import Player from "./Player"
import SnakeController from "./SnakeController"
import IInputHandler from "./IInputHandler"


class HumanPlayer extends Player {
	constructor(snakeController: SnakeController, inputHandler: IInputHandler) {
		super(snakeController); 
	}

	makeTurn() {
		if (this.inputHandler.madeLeftMove()) {
			this.snakeController.turnSnakeLeft();
			this.inputHandler.resetLeftMove();
		} else if (this.inputHandler.madeRightMove()) {
			this.snakeController.turnSnakeRight();
			this.inputHandler.resetRightMove();
		}
	}
}

export default HumanPlayer;
