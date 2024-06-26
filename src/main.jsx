import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Scores from './components/scoreboard.jsx'
import GameBoard from './components/gameboard.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameBoard />
  </React.StrictMode>,
)
