import { useEffect, useState } from 'react';
const Searchmem=()=>
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
   const searchDocument=()=>{
      fetch(`http://localhost:7000/searchDocument/${name}`)
      .then((temp)=>temp.json())
      .then((res)=>setData(res))
      .catch((e)=>console.log("error"))
    }
return(
<div className="div1">   
<h1 style={{backgroundColor:"pink", color:"blue", textAlign:"center",borderBlockStyle:"double"}} > Search user  </h1>    
    <input type="text" placeholder="Enter your Name " onChange={(e)=>setName(e.target.value)}/> 
    <br/>
    <br/>
    <br/>
   <button onClick={searchDocument}> search User</button>
   </div> 
)
}
export default Searchmem;