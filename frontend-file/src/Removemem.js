import { useEffect,useState } from 'react';
import axios from 'axios';
const Removemem=()=>
{
   let [name,setName]=useState("");
   let [data, setData]=useState([]);
  useEffect(()=>
  {
    fetch("http://localhost:7000/getInfo")
    .then((temp)=>temp.json())
    .then((res)=>setData(res))  
    .catch((e)=>console.log("error"))
  },[])
  console.log(data);
   const deleteDocument=()=>{
      axios.delete(`http://localhost:7000/removeDocument/${name}` )
    }
return(

<div className="div1">   
   <h1 style={{backgroundColor:"pink", color:"blue", textAlign:"center",borderBlockStyle:"double"}} >
       Remove user by name  New User  </h1>
       <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
    <br/>
    <br/>
    <br/>
   <button onClick={deleteDocument}> Remove  User</button>
   </div>
)
}
export default Removemem;