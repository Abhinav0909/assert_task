const mongoose = require('mongoose');
const schema = mongoose.Schema;
const listSchema = new schema({
    header:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    comments:[
        {
           _id:Number,
           content:String,
        }
    ]
})
module.exports = mongoose.model("Task",listSchema);