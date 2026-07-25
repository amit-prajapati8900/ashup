const Mongoose = require('mongoose');
const schema1 = require('../schema/schema1');
const model2 = Mongoose.model('model2', schema1);
module.exports = model2;