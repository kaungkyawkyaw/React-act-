import { useSelector } from "react-redux"
import Cart from "./Cart"

const AddToCarts = () => {
  const {productcart:carts}=useSelector((state)=>state.products)
  console.log(carts)
  return (
    <>
      <div>
        {carts?.map((cart)=>{
          return(
            <Cart key={cart.id} cart={cart}/>
          )
        })}
      </div>
    </>
  )
}

export default AddToCarts