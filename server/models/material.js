const mongoose = require('mongoose');

const materialSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique: 1,
        maxlength: 100
    }
});

const Material = mongoose.model('Material',materialSchema);

module.exports = { Material }
