
import { useEffect } from "react"
import Home from "./Home"
import Create from "./Create"
import About from "./About"
import Navbar from "./NavBar"
// import Navgation from "./Navigation"
import { BrowserRouter,Routes,Route } from "react-router-dom"
// import { useEffect } from "react"
function App(){
 useEffect (()=>{

 },[])
  return(
    <>
  <BrowserRouter>
  <Navbar name="kodamare"/>

  <Routes>
    {/* <Route  path="/" element = {<Navbar/>}> */}
<Route path="/" element={<Home/>}/>
<Route path="About" element={<About/>}/>
<Route path="create" element ={<Create/>}/>
{/* <Route element={<Home/>}/> */}

{/* </Route> */}


  </Routes>
  
 
  
  </BrowserRouter>
  </>)
}
export default App