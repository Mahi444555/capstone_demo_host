const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://mahesh25:mahesh25@cluster0.ppcbzm4.mongodb.net/gofoodmern?retryWrites=true&w=majority"

const createConnection = async()=>{
   await mongoose.connect(mongoURI,{useNewUrlParser:true, useUnifiedTopology:true},async(err,result)=>{
   
   if(err)
        console.log("something went wrong plz try again", err)
   else{
        console.log("Connected successfully");

        const fetched_data = await mongoose.connection.db.collection("sample");
        fetched_data.find({}).toArray(function( err, data){
          if(err) 
               console.log(err);
          else 
          // console.log(data)
                console.log();
        })
      
      
   }
});
}
module.exports = createConnection;




























