const mongoose = require("mongoose");
const URI = "mongodb+srv://Xlongclaw:bLifq5TtL69ck66t@conference-web-cluster.o1ki6ge.mongodb.net/artigence"

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connectDatabase = () =>{
    mongoose.connect(URI, options )
}


module.exports = connectDatabase