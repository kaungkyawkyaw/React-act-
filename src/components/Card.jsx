import { useDispatch } from "react-redux"
import { addtocart } from "../feature/services/productsSlice";
import { Link } from "react-router-dom";

const Card = ({product}) => {
  const dispatch=useDispatch();
  return (
    <>
    <div>{product?.title}</div>
    <div className=" flex justify-start items-center gap-1">
    <button onClick={()=>{dispatch(addtocart(product))}} className=" bg-green-500">click</button>
    <Link to={`/details/${product.id}`}>
    <button className=" bg-gray-500">Details</button>
    </Link>
    </div>
    </>
  )
}

export default Card