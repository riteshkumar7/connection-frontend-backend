const express=require("express")
const Data=require("../Model/data")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const route=express.Router();
require("../DB/cont");

const fun=(req,res,next)=>{
    console.log("welcome...");
    next();
}
route.get("/",(req,res)=>{
    res.send("Home Page");
})
route.post("/newDocument",async (req,res)=>{

    try{
        const{name,age,payment}=req.body;
        let employee=new Data({name,age,payment})
        await employee.save();
        res.send("employee joined")
    }
    catch(e){
        console.log(e)
    }
})

route.post("/login",async (req,res)=>{
    try{
        const {name,password}=req.body;
        const user=await Data.findOne({name});
        if((await bcrypt.compare(password,user.password))){
        const token=jwt.sign(
            {user_id:user._id,name},
            process.env.TOKEN_KEY,
            {
                expiresIn:"2h",
            }
        )
        user.token=token;
        res.send(user);
        }
        else{
            res.send("Invalid");
        }
    }
    catch(err){
        console.log(err);
    }
});


route.get("/getInfo",fun,async (req,res)=>{
    try{
        let data=await Data.find();
        res.send(data);
    }
    catch(e){
        console.log(e);
    }
})

route.get("/searchDocument/:name",async(req,res)=>{
    try{
        let {name}=req.params;
        let data=await Data.find({name})
        res.send(data);
    }
    catch(e){
        console.log(e)
    }
})

route.delete("/removeDocument/:name",async(req,res)=>{
    try{
        console.log(req.params);
        const {name}=req.params;
        const data=await Data.findOneAndDelete({name:name});
        res.send("removed");
    }
    catch(e){
        console.log(e);
    }
})

/*route.patch("/updateDocument/:id",async(req,res)=>{
    try{
        let {id}=req.params;
        await Data.findByIdAndUpdate(id,req.body,{new:true})
        res.send("updated...")
    }
    catch(e){
        console.log(e)
    }
})*/

route.put("/UpdatedDocument/:name", async(req,res)=>{
    try{
        let {name}=req.params;
        await Data.findOneAndUpdate({name:name},req.body,{new:true})
        res.send("updated...")
    }
    catch(e){
        console.log(e)
    }
})

module.exports=route;