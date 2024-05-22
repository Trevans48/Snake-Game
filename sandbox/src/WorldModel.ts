import Snake from "./Snake";
import Point from "./Point";
import IWorldView from "./IWorldView";

class WorldModel {
  private _allSnakes: Snake[];
  private width: number;
  private height: number;
  private _allViews: IWorldView[];

  constructor() {
    this._allSnakes = [];
    this.width = 20;
    this.height = 20;
    this._allViews = [];
  }

update(steps: number): void {
  const collidedSnakes: Snake[] = [];

  for (let i = 0; i < this._allSnakes.length; i++) {
    for (let j = i + 1; j < this._allSnakes.length; j++) {
      const snakeA = this._allSnakes[i];
      const snakeB = this._allSnakes[j];

      if (snakeA.didCollide(snakeB) && !collidedSnakes.includes(snakeA)) {
        collidedSnakes.push(snakeA);
      }

      if (snakeB.didCollide(snakeA) && !collidedSnakes.includes(snakeB)) {
        collidedSnakes.push(snakeB);
      }
    }
  }

  collidedSnakes.forEach(collidedSnake => {
    const index = this._allSnakes.indexOf(collidedSnake);
    if (index !== -1) {
      this._allSnakes.splice(index, 1);
    }
  });

    this._allSnakes.forEach(snake => {
      snake.move(steps);
    });
    this._allViews.forEach(view => {
      view.display(this)
    });
}

  get worldWidth(): number {
    return this.width;
  }

  get worldHeight(): number {
    return this.height;
  }

  get allSnakes(): Snake[] {
    return this._allSnakes;
  }

  addSnake(snake: Snake): void {
    this._allSnakes.push(snake);
  }

  addView(view: IWorldView): void {
    this._allViews.push(view);
  }
}

export default WorldModel;
