//firstly import all files 
const express=require("express");
const app=express();    //here we calling express method
const cors=require("cors");
const PORT=process.env.PORT||4000;  //port number to run on server
const bodyParser=require("body-parser");
app.use(bodyParser.json()); //if you want to use body-parser then have to use .json()
app.use(cors()); //if you wnat to use cors then use cors() method

//create array of object
 let details=[
    {
        id:1,
        name:"mahesh",
        email:"mahesh@gamil.com",

    },
    {
         id:2,
         name:"Ram",
         email:"ram@gmail.com",

    },
    {
        id:3,
        name:"Praveen",
        email:"pravin@gmail.com",

    },
    {
        id:4,
        name:"Jenny",
        email:"Jenny@gamil.com",

    }
    
 ]

// now we want to use these data and send display using routing mechnism
//if you want to use routing mechanism then use above app.get() whr '/' is root,homePage
app.get('/', function(req,res){ 
    res.send(details)
})

//we just creating app.get() method to get data by its id
app.get("/:id",(req,res)=>{
    let id=req.params.id;   //where .param i.e. parameters
    const data=details.filter(item=>item.id==id);  //checking id 
    res.send(data);
})

//.post() method to push data from postman
app.post("/",async(req,res)=>{
    details.push(req.body);
    res.send({message:"Data send Successfuly"})
})

//to update the data we use put()
app.put("/",async(req,res)=>{
    for(let i=0;i<details.length;i++){
        if(req.body.id==details[i].id){
            details[i].name=req.body.name;
            details[i].email=req.body.email;
        }
    }
    res.send({message:"update details successfully"});
})


//to delete data use .delete()
app.delete("/", async(req,res)=>{
    let index;
    for(let i=0;i<details.length;i++){
        if(req.params.id==details[i].id){
            index=i;
        }
    }
    details.splice(index,1);
    res.send({message:"successfully deleted"});
})

app.listen(PORT, ()=>{
    console.log("app is running on port", PORT)
})



