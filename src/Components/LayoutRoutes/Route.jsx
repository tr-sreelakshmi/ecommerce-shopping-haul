import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Logout from '../Logout/Logout'
import ProductDetail from '../ProductDetail/ProductDetail'


function RouteLayout() {
  return (
    <>
<BrowserRouter>
<Header/>
<Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/logout'  element={<Logout/>}/>
    <Route path='/product/:id'  element={<ProductDetail/>} />

</Routes>
<Footer/>
</BrowserRouter>

    </>
  )
}

export default RouteLayout