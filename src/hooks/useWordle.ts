import { useState } from 'react'

type LetterColor = 'green' | 'yellow' | 'grey'

type LetterObject = {
  key: string
  color: LetterColor
}

type UseWordleReturn = {
  turn: number
  currentGuess: string
  guesses: LetterObject[][]
  isCorrect: boolean
  handleKeyup: (event: KeyboardEvent) => void
}

const useWordle = (solution: string): UseWordleReturn => {
  const [turn, setTurn] = useState<number>(0)
  const [currentGuess, setCurrentGuess] = useState<string>('')
  const [guesses, setGuesses] = useState<LetterObject[][]>([])
  const [history, setHistory] = useState<string[]>([])
  const [isCorrect, setIsCorrect] = useState<boolean>(false)

  // format a guess into an array of letter objects 
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = (): LetterObject[] => {
    // TODO: 实现格式化逻辑
    return []
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = () => {
    // TODO: 实现添加新猜测逻辑
  }

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({key} : KeyboardEvent) => {
    console.log('key pressed - ' + key)

    if (key === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1))
      return
    }

    if (/^[A-Za-z]$/.test(key)) {
      // 如果按下的是字母键，则添加到currentGuess
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key.toLowerCase())
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle