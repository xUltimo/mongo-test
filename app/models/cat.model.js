const mongoose = require('mongoose');

const CatSchema = mongoose.Schema({
    name: String,
    owner: String,
    color: String,
    breed: String,
    taillength: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('cat', CatSchema);