
const Admin = require("../../Model/admin");
const Product = require("../../Model/product");
const jwt = require("jsonwebtoken");

var express = require('express');
var router = express.Router();


const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const  passwordHash = require('password-hash');


//////////////////////////////////// Compare hash function 
const  compareHash = (pass,hash) => {
    const  status = passwordHash.verify(pass, hash)
    console.log(`status is : ${status}`)
   return  status
}
///////////////////////////////////// has password 
const  hashPassword  =(raw) => {
  
   return passwordHash.generate(raw); 
      
}
////////////////////////////////////////////////////////// POST admin register
const postAdmin = async (req,res) => {
    const  newOb = {
        ...req.body,
        password : hashPassword(req.body.password) 
 }
 console.log(newOb)

    await Admin.findOne({email:req.body.email}).then(async (data)=> {

        if (!data) {
            await Admin.create(newOb).
            then((data)=> res.status(200).json({status:true,msg:"Register successful",data:data})).
            catch((error)=> res.status(200).json({status:false,msg:" Server Error ",data:data}))
        }
           
        res.status(400).json({status:true,msg:"Already register !!",data:error})

        
    }).catch((error)=> {
        res.status(400).json({status:false,msg:"Server Error !!",data:error})
    })
    

    
  
}
/////////////////////////////////////////////////////////POST admin Login 
const loginAdmin = async (req,res) => {
    const  {email,password} = req.body 

    await Admin.findOne({email:email}).then(async (data) =>{
        console.log(data)
        if (!data) {
            res.status(200).json({status:true , msg:"User Not registered", data:data })
        }
        else {
            if (compareHash(password,data.password)) { ////////////////////////// Login condition 
                const token = jwt.sign( email, "SECRET_KEY");
                res.status(200).json({status:true , msg:"Login successful",data:{email:email ,token:token}})
            }
            else {
                res.status(200).json({status:true , msg:"invalid password"})
            }
              
        }
}).catch((error)=>res.status(400).json({status:false,msg:"Server Error !!",data:error}))}


////////////////////////////////////////////////////////////POST login  with token 
const tokenLogin = async (req,res) => {
    const token = req.headers.authorization 
    if (token) {
        const decoded = jwt.verify(token,"SECRET_KEY")
        await Admin.findOne({email:decoded}).then((data)=> {
            if (!data) {
                 res.status(200).json({status:false,msg:"This admin does not exists in Database , please register again with the same email id" ,data:decoded})
            }
            else{
                res.status(200).json({status:true ,msg: `Hi ${decoded} , Welcome` })
            }
        }).catch((error)=> {res.status(400).json({status:false ,msg: `Server Error Trt Agian !!` ,data:error})})
        
    }else {
        res.status(200).json({status:true,msg:"No Token sent" })
    }

}

/////////////////////////////////////////////////////////// POST NEW PRODUCT

const addNewPro = async (req,res) => {
    await Product.create().
    then((data)=> res.status(200).json({status:true,msg:"Product added successfully" ,data:data})).
    catch((error)=>res.status(400).json({status:false,msg:"Server error !" ,data:error}))
}
////////////////////////////////////////////////////////////////////

module.exports = {postAdmin,loginAdmin,tokenLogin}