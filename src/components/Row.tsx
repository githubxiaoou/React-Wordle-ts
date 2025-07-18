import type { LetterObject } from "../hooks/useWordle"

type RowProps = {
  guess?: LetterObject[]
}

export const Row = ({ guess }: RowProps) => {
  if (guess) {
    return (
      <div className="row">
        {guess.map((letter, index) => {
          return <div key={index} className={letter.color}>{letter.key}</div>
        })}
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
