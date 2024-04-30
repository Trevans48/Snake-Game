import Snake from "./Snake";
import Point from "./Point";
import IWorldView from "./IWorldView"

class WorldModel {
  private snake_: Snake;
  private width: number;
  private height: number;
  private worldView: IWorldView | null;

  constructor(s: Snake, width: number, height: number) {
    this.snake_ = s;
    this.width = width;
    this.height = height;
    this.worldView = null;
  }

  update(steps: number): void {
    this.snake_.move(steps);
    if (this.worldView !== null) {
            this.worldView.display(this);
        }
  }

  get worldWidth(): number {
    return this.width;
  }

  get worldHeight(): number {
    return this.height;
  }

  get snake(): Snake {
    return this.snake_;
  }

  set snake(s:Snake) {
    this.snake_ = s;
}

  get WorldView(): IWorldView | null {
    return this.worldView;
  }

  set WorldView(view: IWorldView | null) {
    this.worldView = view;
  }

  setView(view: IWorldView): void {
    this.worldView = view;
  }
}

export default WorldModel;
