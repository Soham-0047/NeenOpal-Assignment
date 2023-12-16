import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Load from './components/Load'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Load/>
    <Card/>
    </>
  )
}

export default App
