const mongoose=require('mongoose')
const {Schema,model}=mongoose
 
const JobsSchema=new Schema({
    company:{
        type:String,
        required:[true,'please provide a company'],
        maxLength:50
    },
    position:{
        type:String,
        required:[true,'please provide a position'],
        maxLength:100
    },
    status:{
        type:String,
        enum:['interview','declined','pending'],
        default:'pending'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'please provide a User'],
    }

},{timestamps:true})

module.exports=model('Jobs', JobsSchema)