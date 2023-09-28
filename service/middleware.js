const Admin = require("../Model/admin");
const jwt = require("jsonwebtoken");
const user = {};

/////////////////////////////////////////////////// hasing
user.middleware_1 = async (req, res, next) => {
  console.log('middleware_1 is hit')
  next();
};

//////////////////////////////////////////////////////Token verify
user.middleware_2 = async (req, res, next) => {
  console.log('middleware_2 is hit')
  const token = req.headers.authorization;
  if (token) { 
     
    try {
      const decoded = jwt.verify(token, "SECRET_KEY");
      await Admin.findOne({ email: decoded })
        .then((data) => {
          if (!data) {
            res
              .status(200)
              .json({
                status: false,
                msg: "This admin does not exists in Database , please register again with the same email id",
                data: decoded,
              });
          } else {
            next();
            // res.status(200).json({status:true ,msg: `Hi ${decoded} , Welcome` })
          }
        })
        .catch((error) =>
          res
            .status(400)
            .json({
              status: false,
              msg: `Server Error Trt Agian !!`,
              data: error,
            })
        );
    }
    catch {
      res.status(400).json({ status: false, msg: "invalid token generate new token or login with email password" });
    }
    
  } else {
    res.status(200).json({ status: true, msg: "No Token sent" });
  }
};

module.exports = user;
