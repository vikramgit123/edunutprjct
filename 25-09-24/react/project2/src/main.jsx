import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Component3 from './components/Component3.jsx'
import Component1 from './components/Component1.jsx'
import Component2 from './components/Component2.jsx'
import Calculator from './components/calculator.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component1 />
    <Component2 />
    <Calculator />
   
  </StrictMode>,
)
