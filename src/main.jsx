import React from 'react'
import ReactDOM from 'react-dom/client'
import {NavBar} from './components/NavBar/NavBar'
import './css/index.css'


ReactDOM.createRoot(document.getElementById('nav')).render(
  <React.StrictMode>
      <NavBar />
  </React.StrictMode>,
)
