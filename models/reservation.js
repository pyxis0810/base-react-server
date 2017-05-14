var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var ReservationSchema = new Schema({
  address: Date,
  banner: String,
  date: String,
  email: String,
  member: Number,
  phone: String,
  purpose: String,
  subject : String,
  text: String,
  type: String,
  username: String,
  vehicle: String,
  created_at : {
    type : Date,
    default : Date.now()
  }
});

ReservationSchema.plugin( autoIncrement.plugin , { model : "reservation", field : "id" , startAt : 1 } );
module.exports = mongoose.model('reservation' , ReservationSchema);
