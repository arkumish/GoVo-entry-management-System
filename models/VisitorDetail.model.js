const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VisitorDetailSchema = new Schema ({
    Name:{type: String, required: true, max: 100},
    Phone:{type: Number, required: true},
    Email:{type:String ,require :true},
    Address:{type:String ,require :true},

    HostId :{type: Schema.Types.ObjectId, ref: 'HostDetail', required: true,index:true},
    CheckInTime:{type:Date},
    CheckOutTime : {type : Date, default:null},
    
    
});

VisitorDetailSchema
.virtual('url')
.get(function () {
  return '/VisitorDetail/' + this._id;
});

//Expoting the model
module.exports = mongoose.model('VisitorDetail', VisitorDetailSchema);