import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
const storeItems=Cookies.get("item");
const initialState = {
  productcart:storeItems?JSON.parse(storeItems):[],
}
//  if (storeItems) {
//   initialState.productcart=JSON.parse(storeItems)
//  }
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   
    addtocart: (state, {payload}) => {
      const isExisted=state.productcart?.find(item=>item.id===payload.id)
      // console.log(isExisted)
      if (isExisted) {
        return state;
      }else{
        state.productcart=[...state.productcart,{...payload,qty:1}]
      }
      Cookies.set("item",JSON.stringify(state.productcart))
    },
    removefromcart:(state,{payload})=>{
      state.productcart=state.productcart?.filter((item)=>item.id!==payload.id)
      Cookies.set("item",JSON.stringify(state.productcart))
    },
    increment:(state,{payload})=>{
      state.productcart=state.productcart?.map((item)=>{
        if (item.id===payload.id) {
          return {...item,qty:item.qty+=1}
        }else{
          return item;
        }
      })
      Cookies.set("item",JSON.stringify(state.productcart))
    },
    decrement:(state,{payload})=>{
      state.productcart=state.productcart?.map((item)=>{
        if (item.id===payload.id && item.qty>1) {
          return {...item,qty:item.qty-=1}
        }else{
          return item;
        }
      })
      Cookies.set("item",JSON.stringify(state.productcart))
    },
  },
})

export const {addtocart,removefromcart,increment,decrement} = productSlice.actions

export default productSlice.reducer