
import {createSlice} from "@reduxjs/toolkit";



const getLocalCartData=()=>{
let localCartData = localStorage.getItem("cart")
if(localCartData === []){
    return []
}else{
    return JSON.parse(localCartData)
}
}
// const items = localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')):[]

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload)
            // localStorage.setItem("cart",JSON.stringify(state.cart))
        },
        
        remove(state,action){
            return state.filter(item=>item.id !== action.payload)
        }
    }
})


export const {add,remove} = cartSlice.actions

export default cartSlice.reducer