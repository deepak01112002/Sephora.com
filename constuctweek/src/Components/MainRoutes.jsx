import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Admin from '../Gurmeet/Admin'
import Product from './Product'
import SinglePage from './SinglePage'
import Home from '../Pages/Home'
function MainRoutes() {
  return (
    <div>
    <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/Makeup' element={<Product/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/Makeup/:id" element={<SinglePage/>}></Route>
        
    </Routes>        
    </div>
  )
}

export default MainRoutes