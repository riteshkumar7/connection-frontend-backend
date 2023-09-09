const mongoose=require("mongoose");
const bcrypt=require("bcrypt")
const data=new mongoose.Schema({

name:{type:String},
age:{type:Number},
payment:{type:Number}



});
data.pre('save',async function(next){
    if(this.isModified("password"))
    {
        this.password=await bcrypt.hash(this.password,12)
    }
    next();
})
const Data=new mongoose.model("Data",data);
module.exports=Data;