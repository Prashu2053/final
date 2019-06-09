// express routing
var express= require('express');
var reg_route= express.Router();

//path
var path= require('path');

//schema required
 var register= require('./schemas/registration_schema');

 //get request 
reg_route.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,"public","reg.html"));

})

//post request
reg_route.post('/',async(req,res)=>

    {try{
        console.log(req.body);
        var register1= new register(); //object creation
         register1.name= req.body.name;
         register1.email= req.body.email;
         
         register1.gender=req.body.gender;
         register1.dob=req.body.dob;
         register1.bloodgroup=req.body.bloodgroup;
         register1.state=req.body.state;
         register1.zone=req.body.zone;
        register1.district=req.body.district;
           register1.bodyweight=req.body.bodyweight;
         register1.address=req.body.address;
         register1.contactno=req.body.contactno;
          await register1.save();
          res.send("sucess");
    }
    catch(err)
    {
        console.log(err);
        res.sendStatus(404);
    }
    }
)

module.exports= reg_route;