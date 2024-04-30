import Snake from "./Snake";
import WorldModel from "./WorldModel";

class SnakeController {
    private snakeWorld: WorldModel;
    private slitherer: Snake;

    constructor(snakeWorld: WorldModel, slitherer: Snake) {
        this.snakeWorld = snakeWorld;
        this.slitherer = slitherer;
    }

    turnSnakeLeft() {
        this.slitherer.turnLeft();
    }

    turnSnakeRight() {
        this.slitherer.turnRight();
    }

    public get snakePosition() {
        return this.slitherer.position;
    }

    public get snakeDirection() {
        return this.slitherer.direction;
    }

    worldWidth() {
        return this.snakeWorld.worldWidth;
    }

    worldHeight() {
        return this.snakeWorld.worldHeight;
    }
}

export default SnakeController;
