const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema

const messageSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expire:86400
    }
})

module.exports=mongoose.model('Message',messageSchema)