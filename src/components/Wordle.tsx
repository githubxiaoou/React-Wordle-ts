import {useEffect} from 'react'
import useWordle from '../hooks/useWordle'

export default function Wordle({solution}: {solution: string}) {
  const {currentGuess, handleKeyup} = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => {
      window.removeEventListener('keyup', handleKeyup)
    }
  }, [handleKeyup])

  return (
    <div>
      Wordle
      <div>Current Guess: {currentGuess}</div>
    </div>
  )
}
