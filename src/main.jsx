import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/index'
import Coursel from './components/coursel/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Coursel />
  </React.StrictMode>,
)
