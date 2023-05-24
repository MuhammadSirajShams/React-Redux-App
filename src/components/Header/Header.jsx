

import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
import "./header.css"

const nav_links =[
    {
        path:"/",
        display:"Home"
    },
    {
        path:"/cart",
        display:"Cart"
    },
]
const Header = () => {

    const item =useSelector((state)=>state.cart)

  return (
    <header className="header d-flex align-items-center justify-content-evenly">
        
        <div className="logo">REDUX STORE</div>

        <div className="nav_links d-flex align-items-center justify-content-center">
            <ul className="nav_list ">
                {
                    nav_links.map((items,index)=>(
                        <li className="nav_items" key={index} >
                            <NavLink className={navClass=>navClass.isActive?"is_active":""} to={items.path}>{items.display}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>

        <div className="cart">
            <span className="cart_items">Cart Item : {item.length}</span>
        </div>
    </header>
  )
}

export default Header