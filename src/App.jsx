import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from "./componentes/navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>


    </div>
  )
}

export default App
