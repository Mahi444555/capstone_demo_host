// const http = require('http');   //importing https moduls
//                                 //http server contains 2 parameters ie. request  & response
// http.createServer((request,response)=>{ 

//     response.setHeader("content-Type", "text/plain");   //we showing info content-type and in plain text

//     response.end("Hello World! ");
// }).listen(4000,()=>{
//     console.log("server running on port 4000");
// })



// const http=require("http");//import modules http from node
// const port=6000; //create a variable for port number

// const server=http.createServer((request,response)=>{
//     // response.setHeader("Content-Type", "text/plain");  
//     // response.end("Hello FOlks how are you")

//     response.writeHeader(200,{'Content-Type', 'text/html'});
//     // let data=`
//     // <div>
//     // <h1>Hello</h1>
//     // <h2>Welcome</h2>
//     // <h3>TO</h3>
//     // <h1>Node.js</h1>
//     // </div>
//     // `

//     let data=[
//         {user:"Ramesh"},
//         {user:"Sohan"}
//     ]

//    response.write(JSON.stringify(data))
// })

// server.listen(port,()=>{
//     console.log(`Server is running on ${port}`)
// })


//using express.js create basic server
const express=require("express");//import 
const app=express();    //calling express method ans assing to app-varible

//setting a port number 
const PORT=process.env.PORT||5000;


app.get('/all',function(req,res){
    res.send({
        status:200,
        message:"Welcome to Express.js server!"
    })
})


// app.post('/',(req,res)=>{
//   details.push(req.body);
//   res.send({message:})
// })

app.listen(PORT,()=>console.log("Server is running on port "+ PORT))