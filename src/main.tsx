import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import WeatherContextProvider from './context/weatherContext'

import "./index.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </React.StrictMode>,
)
