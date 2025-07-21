import { useEffect, useState } from 'react'

import './App.css'
import Wordle from './components/Wordle'

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/solutions')
      const data = await response.json()
      const randomIndex = Math.floor(Math.random() * data.length)
      setSolution(data[randomIndex].word)
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
