//donor registration schema

const mongoose= require('mongoose');
var registration_schema= mongoose.Schema({
                                name:
                                {
                                    type:String,
                                    required:true,
                                    message: "name is required"
                                },
                                email:
                                {
                                    type:String,
                                    required:true
                                },
                                gender:
                                {
                                    type:String,
                                    required:true
                                },
                               dob :
                                {
                                    type:Date,
                                    required:true
                                },
                               bloodgroup:
                                {
                                    type:String,
                                    required:true
                                },
                                state:
                                {
                                    type:String,
                                    required:true
                                },
                                zone:
                                {
                                    type:String,
                                    required:true
                                },
                                district:
                                {
                                    type:String,
                                    required:true
                                },
                                bodyweight:
                                {
                                    type:String,
                                    required:true
                                },
                                address:
                                {
                                    type:String,
                                    required:true
                                },
                                contactno:
                        
                                {
                                    type:String,
                                    required:true
                                }

                
});

var registration_model= mongoose.model('registration_model',registration_schema);
module.exports= registration_model;