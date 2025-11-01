import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginScreen from './Pages/LoginScreen'
import SignupScreen from './Pages/SignupScreen'
import { PageNames } from './Constants'
import MainPage from './Pages/MainPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/signup' element ={<SignupScreen/>}/>
      <Route path={PageNames.mainPage} element = {<MainPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
