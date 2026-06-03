import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import AuthProvider from './context/AuthProvider.jsx'

//localStorage.clear()

//Authentication data could be used anywhere throughout the app thus we are sending it as context hook  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> 
      <App />
    </AuthProvider>
  </StrictMode>,
)
