import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AboutUs from '../pages/AboutUs'
import Home from '../pages/Home'
import AnimalMate from '../pages/AnimalMate'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { AuthContext } from '../context/AuthContext'


const AppRouter = () => {
  const {currentUser} = useContext(AuthContext)
  function PrivateRouter () {
    
    if(!currentUser){
      return <Navigate to="/login"/>
    }else{
      return <Outlet/>
    }
  }
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path="/animalMate"  element={<PrivateRouter/>}>
                <Route path="" element={<AnimalMate/>}/>
            </Route>
            {/* <Route path='/animalMate' element={<AnimalMate/>}/> */}
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter