import Point from "./Point";
import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  public currentParts: Point[];
  private currentDirection: number;
  public color: string;
  constructor(snakeColor: string, startPosition: Point, size: number) {
    this.currentParts = [startPosition];
    this.currentDirection = 4;
    this.color = snakeColor;
    
    for (let s = 1; s < size; s++) {
      this.currentParts.push(new Point(startPosition.x - s, startPosition.y));
    }
  }
  move(moves: number) {
    /*display("The", this.color, "snake moved", moves, "squares");*/
    for (let m = 0; m < moves; m++) {
      for (let l = this.currentParts.length - 1; l > 0; l--) {
        this.currentParts[l] = this.currentParts[l - 1];
      }
      let head = this.currentParts[0];
      let newHead: Point;

      if (this.currentDirection === 1) { 
        newHead = new Point(head.x, head.y - 1);
      } else if (this.currentDirection === 2) { 
        newHead = new Point(head.x, head.y + 1);
      } else if (this.currentDirection === 3) { 
        newHead = new Point(head.x - 1, head.y);
      } else if (this.currentDirection === 4) { 
        newHead = new Point(head.x + 1, head.y);
      } else {
        newHead = new Point(head.x, head.y);
      }

      this.currentParts[0] = newHead;
    }
  }

  didCollide(s: Snake): boolean {
    const head = this.currentParts[0];

    if (this.currentParts.slice(1).some(part => head.equals(part))) {
      return true;
    }

    if (s.currentParts.some(part => head.equals(part))) {
      return true;
    }

    return false;
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
  
  public get position(): Point {
    return this.currentParts[0];
  }

  public get direction() {
    return this.currentDirection
  }
}



export default Snake;
