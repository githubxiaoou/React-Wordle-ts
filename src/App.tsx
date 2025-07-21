import { useEffect, useState } from 'react'

import './App.css'
import Wordle from './components/Wordle'

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(import.meta.env.BASE_URL + 'mock/db.json')
      const data = await response.json()
      const solutions = data.solutions
      const randomIndex = Math.floor(Math.random() * solutions.length)
      setSolution(solutions[randomIndex].word)
    }

    fetchData()
  }, [setSolution])

  return (
    <>
    <div className="App">
      <h1>Wordle(Lingo)</h1>
      {!solution && <div>Loading...</div>}
      {/* {solution && <div>Solution: {solution}</div>} */}
      {/* Render the Wordle component only if solution is available */}
      {solution && <Wordle solution={solution} />}
    </div>
    </>
  )
}

export default App
