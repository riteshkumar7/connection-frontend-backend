import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Addmem from "./Addmem";
import Updatemem from "./Updatemem";
import Searchmem from "./Searchmem";
import Removemem from "./Removemem";
import Show from "./Show";

const Routing=()=>
{
  return(
   <>
 <Routes>

  <Route path="/" element={<Home/>}/> 
  <Route path="/addmem" element={<Addmem/>}/> 
  <Route path="/updatemem" element={<Updatemem/>}/> 
  <Route path="/searchmem" element={<Searchmem/>}/> 
  <Route path="/removemem" element={<Removemem/>}/> 
  <Route path="/show" element={<Show/>}/> 

 </Routes>
   </>
  )
}

export default Routing;