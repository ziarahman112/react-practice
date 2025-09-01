import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './frontend/index.css'
import App from './frontend/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
