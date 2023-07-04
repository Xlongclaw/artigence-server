const mongoose = require("mongoose")

const EventDateSchema = new mongoose.Schema({
    confId:String,
    title:String,
    details:String,
    date:{ type:Date,default:Date.now},
    sequence:Number,
    extended:Boolean,
    newDate:{ type:Date,default:Date.now},
    completed:Boolean,
    featured:Boolean,

})

const eventdate = mongoose.model("EventDate",EventDateSchema);
module.exports = eventdate;