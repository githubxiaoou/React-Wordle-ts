import React from 'react'

type ModalProps = {
  isCorrect: boolean
  solution: string
  turn: number
}

const Modal = ({ isCorrect, solution, turn }: ModalProps) => {
  return (
    <div className='modal'>
      {isCorrect ? (
        <div>
          <h2>Congratulations!</h2>
          <p>You guessed the word "{solution}" in {turn + 1} turns!</p>
        </div>
      ) : (
        <div>
          <h2>Game Over</h2>
          <p>The correct word was "{solution}". Better luck next time!</p>
        </div>
      )}
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  )
}

export default Modal