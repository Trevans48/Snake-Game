import Player from "./Player";
import SnakeController from "./SnakeController"
import Snake from "./Snake"
import Point from "./Point"

class AvoidWallsPlayer extends Player {
  constructor(snakeController: SnakeController) {
    super(snakeController);
  }

  makeTurn(): void {
    const snakePosition = this.sc.snakePosition;
    const snakeDirection = this.sc.snakeDirection;
    const worldWidth = this.sc.worldWidth();
    const worldHeight = this.sc.worldHeight();

 //up = 1, down = 2, left = 3, right = 4
    if (snakeDirection === 1 && snakePosition.x < .5*worldWidth && snakePosition.y === 0) {
      this.sc.turnSnakeRight();
    } 
    else if (snakeDirection === 1 && snakePosition.y === 0) {
      this.sc.turnSnakeLeft();
    } 
    else if (snakeDirection === 2 && snakePosition.x < .5*worldWidth && snakePosition.y === worldHeight-1) {
      this.sc.turnSnakeLeft();
    } 
    else if (snakeDirection === 2 && snakePosition.y === worldHeight-1) {
      this.sc.turnSnakeRight();
    } 
    else if (snakeDirection === 3 && snakePosition.x === 0 && snakePosition.y < .5*worldHeight) {
      this.sc.turnSnakeLeft();
    } 
    else if (snakeDirection === 3 && snakePosition.x === 0) {
      this.sc.turnSnakeRight();
    } 
    else if (snakeDirection === 4 && snakePosition.x === worldWidth-1 && snakePosition.y < .5*worldHeight) {
      this.sc.turnSnakeRight();
    }
    else if (snakeDirection === 4 && snakePosition.x === worldWidth-1) {
      this.sc.turnSnakeLeft();
    }
  }
}

export default AvoidWallsPlayer;