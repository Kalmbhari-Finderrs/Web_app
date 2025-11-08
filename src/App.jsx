import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginScreen from './Pages/LoginScreen'
import SignupScreen from './Pages/SignupScreen'
import { PageNames } from './Constants'
import MainPage from './Pages/MainPage'
import Information from './Pages/Information'

function App() {

  return (
    <BrowserRouter basename={PageNames.baseName}>
    <Routes>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/signup' element ={<SignupScreen/>}/>
      <Route path={PageNames.mainPage} element = {<MainPage/>}/>
      <Route path={`${PageNames.project}/:id`} element = {<Information/>}/>
      <Route path={`${PageNames.worker}/:id`} element = {<Information/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
