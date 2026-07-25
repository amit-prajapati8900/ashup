const mongoose = require("mongoose");
const schema2 = require("../schema/userschema");
const User = mongoose.model("User",schema2);
module.exports = User;