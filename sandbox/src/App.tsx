import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";
import Point from "./Point";
import WorldModel from "./WorldModel";
import IWorldView from "./IWorldView";
import CanvasWorldView from "./CanvasWorldView";
import GameController from "./GameController";
import HumanPlayer from "./HumanPlayer";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import SnakeController from "./SnakeController";
import LRKeyInputHandler from "./IInputHandler";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("Snake Moves:");
    let redSnake = new Snake("red", new Point(0,0), 4);
    let blueSnake = new Snake("blue", new Point(0,50), 4);
    const worldModel = new WorldModel();
    const canvasWorldView = new CanvasWorldView(30);
    const humanPlayer = new HumanPlayer(new SnakeController(worldModel, blueSnake), new LRKeyInputHandler());
    const avoidWallsPlayer = new AvoidWallsPlayer(new SnakeController(worldModel, redSnake));
    const gameController = new GameController(worldModel);
    gameController.setPlayer1(humanPlayer);
    gameController.setPlayer2(avoidWallsPlayer);
    worldModel.setViews(canvasWorldView);
    gameController.run();
   
    /*display(
      "The Red Snake moved a total of:", "(" +
      redSnake.position.x + ", " + redSnake.position.y + ")",
      "squares from the starting position",
    );
    display(
      "The Blue Snake moved a total of:", "(" +
      blueSnake.position.x + ", " + blueSnake.position.y + ")",
      "squares from the starting position",
    );*/
    return () => {document.querySelector("canvas") && document.body.removeChild(document.querySelector("canvas")!)} 
  }, []);
  return (
    <div className="App">
      <h1>Welcome to my Snake Game!</h1>
      <h2>Click left or right to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
