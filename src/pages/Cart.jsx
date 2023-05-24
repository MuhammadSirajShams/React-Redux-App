
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "../../src/App.css"
import {Container,Row} from "reactstrap"
import {remove} from "../store/cartSlice"

const Cart = () => {

    const dispatch =useDispatch()
    const products = useSelector(state=>state.cart)

const handleRemove=(productId)=>{
    dispatch(remove(productId))
}

  return  <Container>
        <Row>

        
    <h3>Cart</h3>
    <div className="cart_wrapper">

  

        {
            products.map(product=> (
                
                <div className="cart_card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h5>{product.title}</h5>
                    <h6>{product.price}</h6>
                    <button onClick={()=>handleRemove(product.id)} className='btn btn-danger'>Remove</button>
                </div>
                

            ))
        }
        
    </div>
    </Row>
    </Container>
  
}

export default Cart