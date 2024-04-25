import Snake from "./Snake";

class Point {
  private xcoord: number;
  private ycoord: number;
  constructor(x: number, y:number) {
    this.xcoord = x;
    this.ycoord = y;
  }
  public get x() {
    return this.xcoord;
  }
  public get y() {
    return this.ycoord;
  }
}

export default Point;