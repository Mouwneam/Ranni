import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  CartContext  from './context/cartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContext>
      <App></App>
    </CartContext>
  </StrictMode>,
)
