import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { CardContextProvider } from './context/cartContext'
import { ProductContextProvider } from './context/productContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ProductContextProvider>
    <CardContextProvider>
      <App />
      </CardContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
