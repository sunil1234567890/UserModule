const mongoose= require('mongoose');

var User = mongoose.model('User',{
     first_name:{type:String,required : true},
     last_name :{type:String,required : true},
     email:{type:String,unique: true,required : true },
     phone :{type:String},
     profile :{type:String},
});
module.exports = {User}; //ES6 sort-hand method