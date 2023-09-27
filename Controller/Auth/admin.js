
const Admin = require("../../Model/admin");

var express = require('express');
var router = express.Router();
var admin = require("../../Controller/Auth/admin");

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const  passwordHash = require('password-hash');


//////////////////////////////////// Compare hash function 
const  compareHash = (pass,hash) => {
    const  status = passwordHash.verify(pass, hash)
    console.log(status)
   return  status
}
///////////////////////////////////// has password 
const  hashPassword  =(raw) => {
  
   return passwordHash.generate(raw); 
      
}
////////////////////////////////////////////////////////// POST admin register
const postAdmin = async (req,res) => {
    
    await Admin.findOne({}).then((data)=> {
        res.status(400).json({status:false,msg:"Admin already register!!",data:data})
    }).catch((error)=> {
        res.status(400).json({status:false,msg:"Server Error !!",data:error})
    })
    


    const  newOb = {
           ...req.body,
           password : hashPassword(req.body.password) 
    }
    console.log(newOb)

    await Admin.create(newOb).
    then((data)=> res.status(200).json({status:true,msg:"Register successful",data:data})).
    catch((error)=>res.status(400).json({status:false,msg:"Server Error !!",data:error}) )
  
}
/////////////////////////////////////////////////////////POST admin Login 
const loginAdmin = async (req,res) => {
    const  {email,password} = req.body 
    await Admin.findOne({email:email}).then((data) =>{
        console.log(data)
        if (!data) {
            res.status(200).json({status:true , msg:"User Not registered", data:data })
        }
        else {
            if (compareHash(password,data.password)) {
                res.status(200).json({status:true , msg:"Login successful"})
            }
            else {
                res.status(200).json({status:true , msg:"invalid password"})
            }
              
        }
}).catch((error)=>res.status(400).json({status:false,msg:"Server Error !!",data:error}))}

/////////////////////////////////////////////////////////// 
module.exports = {postAdmin,loginAdmin}