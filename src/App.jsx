import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import "./App";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggoleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggoleGamePlay} />}</>
  );
}

export default App;
