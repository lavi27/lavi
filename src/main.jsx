import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Index from './Index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='App'>
    <div className="grid"></div>
    <div className="vignetting"></div>
    <Index />
  </div>
)
