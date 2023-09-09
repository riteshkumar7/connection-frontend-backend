import "./update.css"
import { useState } from 'react'
import axios from 'axios';
const Updatemem=()=>
{
   
  let [name,setName]=useState();
  let [age,setAge]=useState();
  let [payment,setPayment]=useState();

   const UpdatedDocument=()=>{
      axios.put(`http://localhost:7000/UpdatedDocument/${name}`,{name:name,age:age,payment:payment})
    }
return(
<div  className="div1">   
   <h1 
   style={{backgroundColor:"pink", color:"blue", textAlign:"center",borderBlockStyle:"double"}} > Update User Data  </h1>
    
    <input type="text" placeholder="Enter your Name " onChange={(e)=>setName(e.target.value)}/> 
    <br/>
    <br/>


    <input type="number" placeholder="Enter your  age  " onChange={(e)=>setAge(e.target.value)}/> 
    <br/>
    <br/>


    <input type="text" placeholder="enter payment " onChange={(e)=>setPayment(e.target.value)}/> 
    <br/>
    <br/>
   <button onClick={UpdatedDocument}> Update Data</button>
   </div>
)
}
export default Updatemem;