

import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { add } from '../../store/cartSlice'
import {CardTitle,CardBody,Button,Card,CardSubtitle} from "reactstrap"
import { fetchProducts } from '../../store/productSlice'
import {STATUSES} from "../../store/productSlice"
import "./card.css"
import Loader from '../loader/Loader'

const Cards = () => {

    const {data:products,status} = useSelector((state)=>state.product)
    const dispatch = useDispatch()
    // const [products, setProducts] = useState([])

    useEffect(() => {

      dispatch(fetchProducts())
      // const fetchProducts = async()=>{
        
      //   setProducts()

      // }

      // fetchProducts()
    },[])
    
    const handleAdd=(product)=>{
        dispatch(add(product))
    }

if (status===STATUSES.LOADING) {
  return <Loader/>
}
if (status===STATUSES.ERROR) {
  return <h2>SOMETHING WENT......</h2>
}

  return (
    <div className="product_wrapper">
        
        {
            products.map((item)=>(
                // <div className="card" key={item.id}>
                //     <img src={item.image} alt="" />
                //     <h4>{item.title}</h4>
                //     <h5>{item.price}</h5>
                //     <button onClick={()=>handleAdd(item)} className='btn btn-primary'>Add to Cart</button>
                // </div>
                <Card key={item.id} style={{ width: '16rem',height:"25rem"}}>
                <img src={item.image}/>
                <CardBody>
                  <CardTitle tag="h6">{item.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted"tag="h6">{item.price}</CardSubtitle>
                  
                </CardBody>
                  <Button  onClick={()=>handleAdd(item)} className='btn btn-primary'>Add to Cart</Button>
              </Card>
            ))
        }
       
        
    </div>
  )
}

export default Cards