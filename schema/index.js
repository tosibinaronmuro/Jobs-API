 const mongoose=require('mongoose')
 const { Schema,model } = mongoose;

 const UserSchema= new Schema({
    name:{
        type:String,
        required:[true,'please provide name'],
        minlength:3,
        maxlength:50,
    },
    email:{
        type:String,
        required:[true,'please provide name'],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'please provide a valid email'],
        unique: true,
    },
    password:{
        type:String,
        required:[true,'please provide password'],
        minlength:6,
        maxlength:50,
    },
 })

 module.exports=model('User',UserSchema)