import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/Card"
const Home = () => {
  const [products,setProducts]=useState([])
  // const [filter,setFilter]=useState([])
  const [datalay,setData]=useState('')
  const fetchData=async()=>{
    const {data}=await axios.get(`https://fakestoreapi.com/products/`);
    console.log(data)
    setProducts(data)
  }
  useEffect(()=>{
    fetchData()
  },[])
 console.log(datalay)


  // const filterprod=(proditem)=>{
  //   const result=products.filter(item=>{
  //     return item.category===proditem;
  //   })
  //   setData(result);
  // }
  // useEffect(()=>{
  //   if (data===``) {
  //     setFilter(products);
  //     return;
  //   }
  //   const filteritem=products?.filter(it=>it.category.includes(data));
  //   setFilter(filteritem);
  // },[data])
  return (
    <>
    <div className=" flex justify-start items-center gap-5">
    <button className=" py-2 px-3 rounded-lg bg-slate-500" onClick={()=>{setData(``)}}>All</button>
    <button className=" py-2 px-3 rounded-lg bg-slate-500" onClick={()=>{setData(`men's clothing`)}}>Men</button>
    <button className=" py-2 px-3 rounded-lg bg-slate-500" onClick={()=>{setData(`women's clothing`)}}>Women</button>
    <button className=" py-2 px-3 rounded-lg bg-slate-500" onClick={()=>{setData(`electronics`)}}>Electronics</button>
    <button className=" py-2 px-3 rounded-lg bg-slate-500" onClick={()=>{setData(`jewelery`)}}>Jewelery</button>
    </div>
    <div>
        {products?.filter((item)=>{
          if(datalay === ""){
            return item
          }
           else if (item.category.includes(datalay)) {
            return item
          }
        })?.map((product)=>{
          return(
            <Card key={product.id} product={product}/>
          )
        })}
    </div>
    </>
  )
}

export default Home