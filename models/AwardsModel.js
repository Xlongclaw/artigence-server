const mongoose = require("mongoose")

const AwardsSchema = new mongoose.Schema({
    confId:{
        type:String,
        required:true,
    },
    title1:{
        type:String,
        required:true
    },
    title2:{
        type:String
    },
    description:{
        type:String
    },
    sequence:{
        type:Number
    },
    featured:{
        type:Boolean
    },
    new:{
        type:Boolean
    },
    hidden:{
        type:Boolean
    },
    link:{
        type:String
    }
})

const awards = mongoose.model("Awards",AwardsSchema);
module.exports = awards;