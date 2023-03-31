import React from 'react'

import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './app/App'

import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>
)
