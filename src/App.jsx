import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cartas from './assets/Components/Cartas'
import Carrusel from './assets/Components/Carrusel'
import Navbar from './assets/Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Carrusel/>
      <Cartas/>
    </div>
  )
}

export default App
