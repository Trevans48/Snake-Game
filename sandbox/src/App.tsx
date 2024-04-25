import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";
import Point from "./Point";
import WorldModel from "./WorldModel";
import IWorldView from "./IWorldView";
import CanvasWorldView from "./CanvasWorldView";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    let redSnake = new Snake("red");
    let blueSnake = new Snake("blue");
    const worldModel = new WorldModel(redSnake, 20, 20);
    const canvasWorldView = new CanvasWorldView(30);
    worldModel.setView(canvasWorldView);
    worldModel.update(1);
    redSnake.turnRight();
    worldModel.update(1);
    worldModel.update(1);
   
    display(
      "The Red Snake moved a total of:", "(" +
      redSnake.position.x + ", " + redSnake.position.y + ")",
      "squares from the starting position",
    );
    display(
      "The Blue Snake moved a total of:", "(" +
      blueSnake.position.x + ", " + blueSnake.position.y + ")",
      "squares from the starting position",
    );
    return () => {document.querySelector("canvas") && document.body.removeChild(document.querySelector("canvas")!)} 
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
