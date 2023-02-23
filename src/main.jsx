import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserAuthContextProvider } from './context/useAuthContext'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <UserAuthContextProvider>
          <App />
        </UserAuthContextProvider>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
)
