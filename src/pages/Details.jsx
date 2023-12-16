import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Details = () => {
  const {id}=useParams();
  const [product,setProducts]=useState({})
  const fetchData=async()=>{
    const {data}=await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(data)
    setProducts(data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log(id)
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )
}

export default Details