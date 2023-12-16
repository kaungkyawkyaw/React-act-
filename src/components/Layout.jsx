import { Link } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <>
   

    <div className="flex flex-col relative h-screen">
    <div className=" sticky top-0">
      <Navbar/>
    </div>
    <div className="grid grid-cols-12 h-full"> 
    <div className="col-span-2 bg-black">
      <div className=" sticky top-20 flex flex-col justify-center items-center gap-3">
      <Link to={"/"}>
      <button>Home</button>
      </Link>
      <Link to={"/dashboard"}>
      <button>Dashboard</button>
      </Link>
      <Link to={"/addtocart"}>
      <button>Addtocart</button>
      </Link>
      </div>
      
      
    </div>
    <div className=" col-span-10 bg-white">
      <div className=" flex flex-col h-full p-3">
      <div className=" scroll">{children}</div>
      <div className=" mt-auto">
      <Footer/>
      </div>
      </div>
    </div>
    </div>
    </div>
   {/* <div className=" flex flex-col h-screen">
    <div className=" py-2">hi</div>
    <div className=" grid grid-cols-12 h-full">
    <div className=" col-span-2 bg-white">hi</div>
    <div className=" col-span-10 bg-blue-600">hi</div>
    </div>
   </div> */}

    </>
  )
}

export default Layout