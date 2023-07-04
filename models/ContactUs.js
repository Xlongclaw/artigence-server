const mongoose = require("mongoose")

const ContactUsSchema = new mongoose.Schema({
    confId:String,
    title:String,
    name:String,
    designation:String,
    imgLink:String,
    institute:String,
    profileLink:String,
    phone:String,
    email:String,
    fax:String,
    feature:Boolean,
    sequence:Number,
    createdAt:{type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const contact = mongoose.model("Contact",ContactUsSchema);
module.exports = contact;