import { useDispatch } from "react-redux"
import { decrement, increment, removefromcart } from "../feature/services/productsSlice"

const Cart = ({cart}) => {
  const dispatch=useDispatch()
  return (
    <>
    <div className=" flex justify-around items-center">
    <div>
     <h1>{cart?.title}</h1>
    <button onClick={()=>{dispatch(removefromcart(cart))}} className="bg-red-500">remove</button>
    </div>
    <div>
      <div className="flex justify-center items-center">
        <button onClick={()=>{dispatch(decrement(cart))}} className=" bg-slate-500 rounded py-1 px-2">-</button>
        <div>{cart?.qty}</div>
        <button onClick={()=>{dispatch(increment(cart))}} className=" bg-slate-500 rounded py-1 px-2">+</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Cart