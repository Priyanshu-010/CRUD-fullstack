import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductContextProvider } from './contexts/ProductContext.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
