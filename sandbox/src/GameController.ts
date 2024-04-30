import WorldModel from "./WorldModel";
import Player from "./Player";

class GameController {
	private player1: Player | null;
	private player2: Player | null;
	private lastTime: number = 0;
	constructor(private world: WorldModel) {
		this.world = world;
		this.player1 = null;
		this.player2 = null;
	}

	setPlayer1(player: Player) {
		this.player1 = player;
	}

	setPlayer2(player: Player) {
		this.player2 = player;
	}

	run () {
		let lastTime = 0;
		this.startGame();
	}

	private updateFrame() {
		if (this.player1) {
			this.player1.makeTurn();
		}

		if (this.player2) {
			this.player2.makeTurn();
		}

		const currentTime = performance.now(); 
        const elapsedTime = currentTime - this.lastTime;

        if (elapsedTime > 250) {
            this.world.update(1);
            this.lastTime = currentTime;
        }

        requestAnimationFrame(this.updateFrame.bind(this));
    }

    private startGame() {
        requestAnimationFrame(this.updateFrame.bind(this));
	}
}

export default GameController;