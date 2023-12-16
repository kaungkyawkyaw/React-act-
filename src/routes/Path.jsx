import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Details from "../pages/Details"
import AddToCarts from "../components/AddToCarts"
import Error from "../pages/Error"

const Path = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/addtocart" element={<AddToCarts/>}/>
        <Route path="*" element={<Error/>}/>

    </Routes>
    </>
  )
}

export default Path