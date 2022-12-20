const mongoose = require('mongoose')
 
const { Schema } = mongoose;   //destructuring the mongoose which connected to mongoURI cloud so using Schema variable we passing data inside of mongoose  
                                //send data from here destructuring the all data which stored mongoose(online) and storing inside of schema 

const UserSchema = new Schema({     //here we created Schema object 
    name:{
        type:String,
        require: true
    },

    email:{
        type:String,
        require:true
    },

    mobile:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    }

});

module.exports = mongoose.model('user',UserSchema)