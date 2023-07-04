const mongoose = require("mongoose")

const HomeSchema = new mongoose.Schema({
    confId:{
        type:String,
    },
    confName:{
        type:String,
    },
    confStartDate:{
        type:String
    },
    confEndDate:{
        type:String
    },
    aboutConf:{
        type:String
    },
    aboutIns:{
        type:String
    },
    youtubeLink:{
        type:String
    },
    instaLink:{
        type:String
    },
    facebookLink:{
        type:String
    },
    twitterLink:{
        type:String
    },
    logo:{
        type:String
    },
    shortName:{
        type:String
    },
    createdAt:{type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const home = mongoose.model("Home",HomeSchema);
module.exports = home;