const mongoose = require("mongoose")

const SpeakersSchema = new mongoose.Schema({
    ConfId:{
        type:String,
    },
    Name:{
        type:String,
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
    ImgLink:{
        type:String
    },
    TalkType:{
        type:String
    },
    TalkTitle:{
        type:String
    },
    Abstract:{
        type:String
    },
    Bio:{
        type:String
    },
    sequence:{
        type:Number
    },
    feature:{
        type:Boolean
    }
})

const speakers = mongoose.model("Speakers",SpeakersSchema);
module.exports = speakers;