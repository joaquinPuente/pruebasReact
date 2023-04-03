import React from 'react'
import { useState } from 'react';
import Estilo from './HookUseState.module.css'

const HookUseState = () => {
    const [count, setCount] = useState(0);
  
    return (
    <div className={Estilo.div}>
    
      <p>You clicked {count} times</p>
      <button className={Estilo.button1} onClick={() => setCount(count + 1)}>
        Click me to +
      </button>

      <button className={Estilo.button2} onClick={() => setCount(count - 1)}>
        Click me to -
      </button>
    
    </div>
  )
}

export default HookUseState