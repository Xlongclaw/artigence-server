const mongoose = require("mongoose")

const LocationSchema = new mongoose.Schema({
    confId:String,
    description:String,
    address:String,
    latitude:String,
    longitude:String,
    feature:Boolean,
    sequence:Number,
    createdAt:{type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const location = mongoose.model("Location",LocationSchema);
module.exports = location;