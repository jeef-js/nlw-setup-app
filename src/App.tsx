import './styles/global.css'

import { useState } from 'react'
import { Habit } from './components/Habit'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="content bg-zinc-800 text-cyan-400">
      <h1>Hello World</h1>
      <Habit info={'Props from habit'}/>
    </div>
  )
}

export default App
