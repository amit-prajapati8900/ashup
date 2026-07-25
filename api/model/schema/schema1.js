const mongoose =  require("mongoose");
const schema1 = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
});
module.exports = schema1;