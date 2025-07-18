import {useEffect} from 'react'
import useWordle from '../hooks/useWordle'

export default function Wordle({solution}: {solution: string}) {
  const {currentGuess, handleKeyup, guesses, isCorrect, turn} = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => {
      window.removeEventListener('keyup', handleKeyup)
    }
  }, [handleKeyup])

  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div>
      
      <div>Current Guess: {currentGuess}</div>
    </div>
  )
}
