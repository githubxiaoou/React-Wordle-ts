import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import { Keypad } from "./Keypad";
import Modal from "./Modal";

export default function Wordle({ solution }: { solution: string }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => {
        setGameOver(true);
      }, 1200);
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn >= 6 && !isCorrect) {
      setTimeout(() => {
        setGameOver(true);
      }, 1200);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup]);

  useEffect(() => {
    // test
    console.log(guesses, turn, isCorrect, solution);
  }, [guesses, turn, isCorrect]);

  return (
    <div>
      {/* <div>Current Guess: {currentGuess}</div> */}
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {gameOver && (
        <Modal isCorrect={isCorrect} solution={solution} turn={turn} />
      )}
    </div>
  );
}
