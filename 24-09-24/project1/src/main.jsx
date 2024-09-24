import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import Firstcomponent from './components/Firstcomponent.jsx'
import Secondcomponent from './components/Secondcomponent.jsx'
import Cardscompo from './components/Cardscompo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
       
     <Firstcomponent />
    <Secondcomponent />
    <Cardscompo />
    
  </StrictMode>,
)
