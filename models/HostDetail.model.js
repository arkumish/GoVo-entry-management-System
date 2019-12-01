const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HostDetailSchema = new Schema ({
    Name:{type: String, required: true, max: 100},
    Phone:{type: Number, required: true},
    Email:{type:String ,require :true},
    Address:{type:String ,require :true},

});

HostDetailSchema
.virtual('url')
.get(function () {
  return '/HostDetail/' + this._id;
});

//Expoting the model
module.exports = mongoose.model('HostDetail', HostDetailSchema);