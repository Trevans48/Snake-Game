import Point from "./Point";
import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: Point;
  private currentDirection: number;
  private color: string;
  constructor(snakeColor: string) {
    this.currentPosition = new Point(0,0);
    this.currentDirection = 4;
    this.color = snakeColor;
  }
  move(moves: number) {
    /*display("The", this.color, "snake moved", moves, "squares");*/
    if (this.currentDirection === 1)
      this.currentPosition = new Point(this.currentPosition.x , this.currentPosition.y - 1);
    else if (this.currentDirection === 2)
      this.currentPosition = new Point(this.currentPosition.x , this.currentPosition.y + 1);
    else if (this.currentDirection === 3)
      this.currentPosition = new Point(this.currentPosition.x - 1, this.currentPosition.y);
    else if (this.currentDirection === 4)
      this.currentPosition = new Point(this.currentPosition.x + 1, this.currentPosition.y);
  }
  //up = 1, down = 2, left = 3, right = 4
  turnLeft() {
    if (this.currentDirection === 1) {
      this.currentDirection = 3;
    } else if (this.currentDirection === 2) {
      this.currentDirection = 4;
    }
    else if (this.currentDirection === 3) {
      this.currentDirection = 2;
    }
    else if (this.currentDirection === 4) {
      this.currentDirection = 1;
    }
    //display("The", this.color, "snake turned left");
  }
  
  turnRight() {
    if (this.currentDirection === 1) {
      this.currentDirection = 4;
    } else if (this.currentDirection === 2) {
      this.currentDirection = 3;
    }
    else if (this.currentDirection === 3) {
      this.currentDirection = 1;
    }
    else if (this.currentDirection === 4) {
      this.currentDirection = 2;
    }
    //display("The", this.color, "snake turned right");
  }
  
  public get position() {
    return this.currentPosition;
  }

  public get direction() {
    return this.currentDirection
  }
}



export default Snake;
