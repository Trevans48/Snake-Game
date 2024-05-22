import IWorldView from "./IWorldView"
import WorldModel from "./WorldModel"
import Snake from "./Snake";

class CanvasWorldView implements IWorldView {
	private scalingFactor: number;
	private worldCanvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D | null;

	constructor(scalingFactor: number) {
		this.scalingFactor = scalingFactor;
		this.worldCanvas = document.createElement("canvas");
		this.context = this.worldCanvas.getContext("2d")!;
		document.body.appendChild(this.worldCanvas)
	}

	display(worldModel: WorldModel) {
		const canvasWidth = worldModel.worldWidth * this.scalingFactor;
		const canvasHeight = worldModel.worldHeight * this.scalingFactor;

		this.worldCanvas.width = canvasWidth;
		this.worldCanvas.height = canvasHeight;

		this.context!.fillRect(0, 0, canvasWidth, canvasHeight);

		const allSnakes: Snake[] = worldModel.allSnakes;

		allSnakes.forEach((snake: Snake) => {
    	 snake.currentParts.forEach((part) => {
      	  const partX = part.x * this.scalingFactor;
      	  const partY = part.y * this.scalingFactor;
      	  const partWidth = this.scalingFactor;
     	  const partHeight = this.scalingFactor;


		if (this.context) {
    		 this.context.fillStyle = snake.color;
    		 this.context.fillRect(partX, partY, partWidth, partHeight);
    		}
    	 });
  		});
	}
}


export default CanvasWorldView; 