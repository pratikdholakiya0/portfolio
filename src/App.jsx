import { useState } from 'react'
import './App.css'
import JavaDeveloperPortfolio from './component/JavaDeveloperPortfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <JavaDeveloperPortfolio/>
  )
}

export default App
