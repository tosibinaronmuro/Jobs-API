const mongoose=require('mongoose')
const {Schema,model}=mongoose

const JobsSchema=new Schema({
    title:{
        type:String,
        required:[true,'please provide a title'],
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },

})

module.exports=model('Jobs', JobsSchema)