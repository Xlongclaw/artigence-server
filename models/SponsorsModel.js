const mongoose = require("mongoose")

const SponsorsSchema = new mongoose.Schema({
    confId:{
        type:String,
    },
    name:{
        type:String,
    },
    type:{
        type:String
    },
    logo:{
        type:String
    },
    sequence:{
        type:Number
    },
    featured:{
        type:Boolean
    },
    description:{
        type:String
    },
    link:{
        type:String
    }
})

const sponsors = mongoose.model("Sponsors",SponsorsSchema);
module.exports = sponsors;