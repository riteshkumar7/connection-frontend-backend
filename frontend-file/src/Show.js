import { useEffect, useState } from 'react';


const Show=()=>
{
   let [data,setData]=useState();
   let [name,setName]=useState();
  

   useEffect(()=>
  {
    fetch("http://localhost:7000/getInfo")
    .then((temp)=>temp.json())
    .then((res)=>setData(res))
    .catch((e)=>console.log("error"))
  },[])

  console.log(data);
   const showDocument=()=>{
      fetch("http://localhost:7000/getInfo")
      .then((temp)=>temp.json())
      .then((res)=>setData(res))
      .catch((e)=>console.log("error"))
    }

return(
 <div  className="div1">   
   <h1 style={{backgroundColor:"pink", color:"blue", textAlign:"center",borderBlockStyle:"double"}} > Show Member  </h1>
    <input type="text" placeholder="Enter your Name " onChange={(e)=>setName(e.target.value)}/> 
    <br/>
 

   <button onClick={showDocument}>Show Member</button> 
   </div> 

)



}
export default Show;