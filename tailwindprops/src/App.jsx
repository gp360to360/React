import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-pink-400'>Kya chal raha hai</h1>
    <Card username="gp" btnText="visit me"/>
    <Card username="gyan"/>
    </>
  )
}

export default App
