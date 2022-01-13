const mongoose = require("mongoose")
exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://Vinoth:azPceFMoXsaeLurh@cluster0.g1rip.mongodb.net/todolist?retryWrites=true&w=majority')
        console.log("MongoDB Connected")
    } catch(err) {
        console.log(err);
    }
}
