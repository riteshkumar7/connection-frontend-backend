import { useEffect, useState } from 'react';
import axios from 'axios';
const Addmem=()=>
{
  let [name,setName]=useState();
  let [age,setAge]=useState();
  let [payment,setPayment]=useState();

  let [data,setData]=useState([]);

  useEffect(()=>
  {
    fetch("http://localhost:7000/getInfo")
    .then((temp)=>temp.json())
    .then((res)=>setData(res))
    .catch((e)=>console.log("error"))
  },[])
  console.log(data);


  const saveDocument=()=>{
    axios.post("http://localhost:7000/newDocument",{"name":name,"age":age,"payment":payment})
  }
return(<>
  <div  className="div1">   
   <h1 style={{backgroundColor:"pink", color:"blue", textAlign:"center",borderBlockStyle:"double"}} > ADD New User  </h1>
    <input type="text" placeholder="Enter your Name " onChange={(e)=>setName(e.target.value)}/> 
    <br/>
    <br/>

    <input type="number" placeholder="Enter your  age  " onChange={(e)=>setAge(e.target.value)} /> 
    <br/>
    <br/>

    <input type="text" placeholder="enter payment " onChange={(e)=>setPayment(e.target.value)}/> 
    <br/>

    <br/>
   <button onClick={saveDocument}> Create User</button>
   </div>
</>)
}
export default Addmem;