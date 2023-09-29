const Admin = require("../Model/admin");
const User = require("../Model/user");
const jwt = require("jsonwebtoken");


const user = {};

///////////////////////////////////////////////////////////////  header token verify
user.middleware_1 = async (req, res, next) => {
  console.log("middleware_1 is hit");
   
 
  const token = req.headers.authorization;
  if (token) {
    try {
          const decoded = jwt.verify(token, "SECRET_KEY");
          if (decoded) {
            req.userID = decoded._id //  {_id: "hjgdfkhskahd"}
            next();
             ////////////////
          } else {
            res.status(400).json({status:false,msg:"Token is either expired or not valid login again"})
            //////////////////
          }
    } catch {
      res
        .status(400)
        .json({
          status: false,
          msg: "invalid token generate new token",
        });
    }
  } else {
    res.status(200).json({ status: true, msg: "No Token sent !!" });
  }

 
};


module.exports = user;
