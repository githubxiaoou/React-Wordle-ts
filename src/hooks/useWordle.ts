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
  const [guesses, setGuesses] = useState<LetterObject[][]>([]) // each guess is an array
  const [history, setHistory] = useState<string[]>([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState<boolean>(false)

  // format a guess into an array of letter objects 
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = (): LetterObject[] => {
    // console.log('formatting guess for ' + currentGuess)
    let solutionArray : (string | null)[] = [...solution]
    const formattedGuess: LetterObject[] = currentGuess.split('').map((letter) => {
      return { key: letter, color: 'grey' }
    })

    // find all green letters
    formattedGuess.forEach((letterObject, index) => {
      if (letterObject.key === solutionArray[index]) {
        letterObject.color = 'green'
        solutionArray[index] = null // remove from solutionArray so we don't match it again
      }
    })

    // find all yellow letters
    formattedGuess.forEach((letterObject) => {
      if (letterObject.color === 'green') return // skip already matched letters
      const letterIndex = solutionArray.indexOf(letterObject.key)
      if (letterIndex > -1) {
        letterObject.color = 'yellow'
        solutionArray[letterIndex] = null // remove from solutionArray so we don't match it again
      }
    })

    return formattedGuess
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess: LetterObject[]) => {
    if (currentGuess === solution) {
      setIsCorrect(true)
    } 
    // console.log('adding new guess: ', formattedGuess)
    setGuesses(prevGuesses => [
      ...prevGuesses,
      formattedGuess
    ])
    setHistory(prevHistory => [
      ...prevHistory,
      currentGuess
    ])
    setCurrentGuess('')
    setTurn(prevTurn => prevTurn + 1)
  }

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({key} : KeyboardEvent) => {
    // console.log('key pressed - ' + key)
    if (key === 'Enter') {
      if (turn >= 6) {
        console.log('You have used all your guesses.')
        return
      }

      if (currentGuess.length !== 5) {
        console.log('Current guess must be 5 characters long.')
        return
      }

      if (history.includes(currentGuess)) {
        console.log('You have already guessed that word.')
        return
      }

      const formatted = formatGuess()
      addNewGuess(formatted)
      // console.log('formatted guess: ', formatted)
    }

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