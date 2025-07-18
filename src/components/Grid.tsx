import { Row } from "./Row"
import type { LetterObject } from "../hooks/useWordle" // Adjust the path if needed

type GridProps = {
  guesses: LetterObject[][]
  currentGuess: string
  turn: number
}

const Grid = ({guesses, currentGuess, turn} : GridProps) => {
  return (
    <div className="grid">
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess}></Row>
        }
        return <Row key={index} guess={guess}></Row>
      })}
    </div>
  )
}

export default Grid