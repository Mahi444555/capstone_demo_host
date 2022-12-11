const express=require("express");
const mongoose=require("mongoose")
const app=express();


const uri="mongodb+srv://myfirst:nC64k0I6ZwfMvRV8 @cluster0.sup5b1v.mongodb.net/?retryWrites=true&w=majority";

//Write a code to connect with mongodb database 
async function connect(){
    try {
        await mongoose.connect(uri);
        console.log("Connected to Mongodb Database");
    } catch (error) {
        console.log(error)
    }
  
}

connect();


app.listen(4000,()=>{
    console.log("Server Started at port 4000")
})