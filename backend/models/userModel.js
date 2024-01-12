import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    name : {
        type : String ,
        require : true
    },
    email : {
        type : String ,
        require : true ,
        unique : true 
    },
    password: {
        type : String ,
        require : true
    },
    phone : {
        type : String ,
        require : true
    },
    question : {
         type : String ,
         required : true 
    },
    address : {
        type : {} ,
        require : true
    },
    role : {
        type : Number ,
        default : 0 
    }
} , {timestamps : true})

export default mongoose.model('users' , userSchema);