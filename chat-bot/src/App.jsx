import { useState } from 'react'
import { createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavyFedHeader from './components/NavyFedHeader'
import TextBox from './components/TextBox'
import Response from './components/Response'
import {TextBoxContext} from './contexts/TextBoxContext'
function App() {
  
  const [response, setResponse] = useState('');
  const [request, setRequest] = useState('')
  const [isLoading, setLoading] = useState(false);

  return (
    <div>
        <NavyFedHeader/>
        <TextBoxContext.Provider value = {{response, setResponse, request, setRequest, isLoading, setLoading}}>
          <TextBox/>
          {isLoading ?  <div className='loadingContainer'><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div> : <Response/>}
        </TextBoxContext.Provider>
    </div>
  )
}

export default App
