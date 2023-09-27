const mongoose = require("mongoose");
const Admin = require("../../Model/admin");

var express = require('express');
var router = express.Router();
var admin = require("../../Controller/Auth/admin");

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


////////////////////////////////////////////////////////// POST admin other than PIC
const postAdmin = async (req,res) => {
    await Admin.create().
    then((data)=> res.status(200).json({status:true,msg:"Hi this is  admin registers",data:data})).
    catch((error)=>res.status(400).json({status:false,msg:"Server Error !!",data:error}) )
  }


//////////////////////////////////////////////////////// POST PIC
const postAdminPic = async (req,res) => {

    await Admin.updateOne().then((data)=> res.status(200).json({}))

}
///////////////////////////////////////////////////////////
module.exports = {postAdmin}