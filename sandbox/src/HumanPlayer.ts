import Player from "./Player"
import SnakeController from "./SnakeController"
import IInputHandler from "./IInputHandler"


class HumanPlayer extends Player {
	protected ih: IInputHandler;
	constructor(snakeController: SnakeController, inputHandler: IInputHandler) {
		super(snakeController);
		this.ih = inputHandler;
	}

	makeTurn() {
		if (this.ih.madeLeftMove()) {
			this.sc.turnSnakeLeft();
			this.ih.resetLeftMove();
		} else if (this.ih.madeRightMove()) {
			this.sc.turnSnakeRight();
			this.ih.resetRightMove();
		}
	}
}

export default HumanPlayer;
