import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavyFedHeader from './components/NavyFedHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavyFedHeader/>
    </div>
  )
}

export default App
