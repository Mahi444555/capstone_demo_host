// const express=require('express');   //importing pkgs
// const { default: mongoose } = require('mongoose');
// const app=express();    //calling express method
// const PORT= 5000;
// const {MONGOURI}=require('./keys'); //importing uri link form keys.js-folder

// //Mongodb connectivity here we connecting that url
// mongoose.connect(MONGOURI,{
//    useNewUrlParser:true,
//    useUnifiedTopology:true 
// });


// //here we checking our server is connected or not
// mongoose.connection.on("connected",()=>{
//     console.log("connected to MongoDB")
// })

// mongoose.connection.on("error",(err)=>{
//     console.log("Error connecting to MongoDB",err)
// })

// //if we want to use that user.js schema then import that and use with app 
// require('./models/user');
// require('./models/post');
// app.use(express.json());
// app.use(require('./routes/auth'))
// app.use(require('./routes/post'))
// mongoose.model("User")  //this is our schema user.js





// //now create customMiddleware for our app
// // const customMiddleware=(req,res,next)=>{    //where next is used for middleware

// //     console.log("middleware Executed");
// //     next(); //whre this next() method for after customMiddleware execute's then next code will executes 
// // }

// // app.use(customMiddleware);
// // const details=[
// //     {
// //         id:1,
// //         name:"mahesh",
// //         email:"mahesh@gmail.com"
// //     }
// // ]

// // app.get('/', function(req,res){
// //     console.log("HOME")
// //     res.send(details);
// // })

// // app.get('/about',async(req,res)=>{
// //     console.log('About');
// //     res.send('about page');
// // })

// app.listen(PORT,()=>{
//     console.log("server is running on port", PORT);
// })




//////////

const express=require('express');
const app = express();
const mongoose=require('mongoose');
const PORT=5000;
const {MONGOURI}=require('./keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB")
})

mongoose.connection.on('error',(err)=>{
    console.log("Error connecting to MongoDB",err)
})
// o6z9oWIRqXSN9PhO
require('./models/user')
require('./models/post');
app.use(express.json());
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

mongoose.model("User")


// const customMiddleware =(req,res,next)=>{
//     console.log('Middleware Executed');
//     next();
// }
// app.use(customMiddleware)

// app.get("/",(req,res)=>{
// console.log("Home")
// res.send("Hello World")
// })
 
// app.get("/about",(req,res)=>{
//     console.log("About")
//     res.send("About Page")
// })

app.listen(PORT,()=>{
    console.log("Server is running on port",PORT)
})