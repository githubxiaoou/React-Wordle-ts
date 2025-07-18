import type { LetterObject } from "../hooks/useWordle"

type RowProps = {
  guess?: LetterObject[]
  currentGuess?: string
}

export const Row = ({ guess, currentGuess }: RowProps) => {
  if (guess) {
    return (
      <div className="row">
        {guess.map((letter, index) => {
          return <div key={index} className={letter.color}>{letter.key}</div>
        })}
      </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
      <div className="row current">
        {letters.map((letter, index) => {
          return <div key={index} className="current">{letter}</div>
        })}

        {/* Fill the rest of the row with empty divs */}
        {Array.from({ length: 5 - letters.length }).map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    )
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
