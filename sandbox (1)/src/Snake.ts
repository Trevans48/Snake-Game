// import display from "./display";

import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  private color: string;
  constructor(snakeColor: string) {
    this.currentPosition = 0;
    this.currentDirection = 1;
    this.color = snakeColor;
  }
  move(moves: number) {
    display("The", this.color, "snake moved", moves, "squares");
    if (this.currentDirection === 1)
      this.currentPosition = this.currentPosition + moves;
    else this.currentPosition = this.currentPosition - moves;
  }
  turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 1;
    }
    display("The", this.color, "snake turned around");
  }
  public get position() {
    return this.currentPosition;
  }
}

export default Snake;
