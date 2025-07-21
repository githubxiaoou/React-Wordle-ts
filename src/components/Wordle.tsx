import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import { Keypad } from "./Keypad";

export default function Wordle({ solution }: { solution: string }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      console.log("Congratulations! You've guessed the word!");
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn >= 6 && !isCorrect) {
      console.log("Game over! The correct word was: " + solution);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup]);

  useEffect(() => {
    // test 
    // console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div>
      <div>Current Guess: {currentGuess}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} />
    </div>
  );
}
