import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cartas from './assets/Components/Cartas'
import Carrusel from './assets/Components/Carrusel'
import Navbar from './assets/Components/Navbar'
import HookUseState from './assets/Components/HookUseState'
import NumberList from './assets/Components/NumberList'
import HookUseEffect from './assets/Components/HookUseEffect'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import Footer from './assets/Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
      <Route path='/carrusel' element={<Carrusel/>} />
      <Route path='/productos' element={<Cartas/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
