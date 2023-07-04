const mongoose = require("mongoose")

const AnnouncementSchema = new mongoose.Schema({
    confId:{
        type:String,
        default:""
    },
    date:{
        type:Date,
        default:Date.now
    },
    title:{
        type:String,
        default:""
    },
    metaDescription:{
        type:String,
        default:""
    },
    description:{
        type:String,
        default:""
    },
    feature:{
        type:Boolean,
        default:false
    },
    sequence:{
        type:Number,
        default:0

    },
    new:{
        type:Boolean,
        default:false

    },
    hidden:{
        type:Boolean,
        default:false
    },
    link:{
        type:String,
        default:""
    }
})

const announcement = mongoose.model("Announcement",AnnouncementSchema);
module.exports = announcement;