import IWorldView from "./IWorldView"
import WorldModel from "./WorldModel"

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

		const snake = worldModel.snake; 
		console.log(snake)
		if (snake) {
			const snakeWidth = this.scalingFactor;
			const snakeHeight = this.scalingFactor;
			const snakeX = snake.position.x * this.scalingFactor;
			const snakeY = snake.position.y * this.scalingFactor;


			if (this.context) {
    		this.context.fillStyle = "red";
    		this.context.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);
			}

		}
	}
}

export default CanvasWorldView; 