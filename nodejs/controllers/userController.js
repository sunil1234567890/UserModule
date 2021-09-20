const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId

var {User} = require('../models/user');

//=>localhost:3000/users/

// for List of users
router.get('/',(req,res)=>{
    User.find((err,resdocs)=>{
        if(!err){
            res.send(resdocs);
        }else{
            console.log('Error in Listing  user details :'+JSON.stringify(err,undefined,2));
        }
       
    });
});
// get users by ID
router.get('/:id',(req,res)=>{
    User.find((err,resdocs)=>{
        if(!ObjectId.isValid(req.params.id)){
            return res.status(400).send(`No record found : ${req.params.id}`);
         }else{
            User.findById(req.params.id,(err,resdoc)=>{
                if(!err){
                    res.send(resdoc);
                }else{
                    console.log('Error in Listing  user details :'+JSON.stringify(err,undefined,2));
  
                }
            });
        }
       
    });
});
// for create  users
router.post('/',(req,res)=>{
   var user = new User({
    first_name:req.body.first_name,
     last_name :req.body.last_name,
     email:req.body.email,
     phone :req.body.phone,
     profile :req.body.img,
   });
  user.save((err,resdoc)=>{
       if(!err){
           res.send(resdoc);
       }else{
        console.log('Error in Listing  user details :'+JSON.stringify(err,undefined,2));
    }
   });
});

// for update users
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record found : ${req.params.id}`);
     }else{
        var user = {
            first_name:req.body.first_name,
             last_name :req.body.last_name,
             email:req.body.email,
             phone :req.body.phone,
             profile :req.body.img,
           };
           User.findByIdAndUpdate(req.params.id,{$set:user},{new:true},(err,resdoc)=>{
            if(!err){
                res.send(resdoc);
            }else{
             console.log('Error in Listing  user details :'+JSON.stringify(err,undefined,2));
         }

           });
     }

});

// for delete users
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record found : ${req.params.id}`);
     }else{
        User.findByIdAndRemove(req.params.id,(err,resdoc)=>{
            if(!err){
                res.send(resdoc);
            }else{
             console.log('Error in Listing  user details :'+JSON.stringify(err,undefined,2));
         }

         });
     }
});
module.exports=router;