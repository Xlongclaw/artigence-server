const mongoose = require("mongoose")

const CommitteesSchema = new mongoose.Schema({
    ConfId:{
        type:String,
    },
    Type:{
        type:String,
    },
    SubType:{
        type:String
    },
    Name:{
        type:String
    },
    Designation:{
        type:String
    },
    Institute:{
        type:String
    },
    ProfileLink:{
        type:String
    },
    Imglink:{
        type:String
    },
    sequence:{
        type:Number
    },
    feature:{
        type:Boolean
    },
})

const committees = mongoose.model("Committees",CommitteesSchema);
module.exports = committees;