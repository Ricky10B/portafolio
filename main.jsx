import React from 'react'
import './style.css'
import { App } from './src/App'
import { createRoot } from 'react-dom/client'

import './i18n'

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
