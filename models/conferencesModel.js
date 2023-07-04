const mongoose = require("mongoose")

const ConferencesSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    createdAt:{type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const conferences = mongoose.model("Conferences",ConferencesSchema);
module.exports = conferences;