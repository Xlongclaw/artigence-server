const mongoose = require("mongoose")

const NavbarSchema = new mongoose.Schema({
    confId:String,
    title:String,
    heading:String,
    subHeading:String,
    name:String,
    url:String,
    createdAt:{type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const navbar = mongoose.model("Navbar",NavbarSchema);
module.exports = navbar;