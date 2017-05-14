var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  email: String,
  phone: String,
  subject : String,
  text: String,
  username: String,
  created_at : {
    type : Date,
    default : Date.now()
  }
});

ContactSchema.plugin( autoIncrement.plugin , { model : "contact", field : "id" , startAt : 1 } );
module.exports = mongoose.model('contact' , ContactSchema);
