const mongoose = require("mongoose")

const ImageSchema = new mongoose.Schema({
    confId:String,
    name:String,
    imgLink:String,
    feature:Boolean,
    sequence:Number,
    createdAt:{type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const image = mongoose.model("Image",ImageSchema);
module.exports = image;