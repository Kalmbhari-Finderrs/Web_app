import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginScreen from './Pages/LoginScreen'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginScreen/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
