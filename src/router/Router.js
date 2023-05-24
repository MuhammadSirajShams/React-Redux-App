

import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home.jsx'
import Cart from '../pages/Cart.jsx'


const Router = () => {
    return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
    </Routes>
    )
}

export default Router