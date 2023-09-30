const User = require("../../Model/user");

const jwt = require("jsonwebtoken");

var express = require("express");
var router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const passwordHash = require("password-hash");

//////////////////////////////////// Compare hash function
const compareHash = (pass, hash) => {
  const status = passwordHash.verify(pass, hash);
  console.log(`status is : ${status}`);
  return status;
};
///////////////////////////////////// has password
const hashPassword = (raw) => {
  return passwordHash.generate(raw);
};

////////////////////////////////////////////////////////// POST user register
const postUser = async (req, res) => {
  const newOb = {
    ...req.body,
    password: hashPassword(req.body.password),
  };
  console.log(newOb);
  await User.findOne({ phone: req.body.phone })
    .then(async (data) => {
      if (!data) {
        await User.create(newOb)
          .then((data) =>
            res
              .status(200)
              .json({
                status: true,
                msg: "User register successful",
                data: data,
              })
          )
          .catch((error) =>
            res
              .status(400)
              .json({ status: false, msg: " Server Error ", data: error })
          );
      } else {
        res
          .status(200)
          .json({
            status: false,
            msg: "Already register with this phone number !!",
            data: data,
          });
      }
    })
    .catch((error) => {
      res
        .status(400)
        .json({ status: false, msg: "Server Error !!", data: error });
    });
};
/////////////////////////////////////////////////////////POST USER Login
const loginUser = async (req, res) => {
  const { password, phone } = req.body;
  await User.findOne({ phone: phone })
    .then(async (data) => {
      console.log(data);
      if (!data) {
        res
          .status(200)
          .json({ status: true, msg: "User Not registered", data: data });
      } else {
        if (compareHash(password, data.password)) {
          ////////////////////////// ////////////////////////////////Login condition
          
          const  signOb = {_id:data._id}
          const token = jwt.sign(signOb, "SECRET_KEY");
          res
            .status(200)
            .json({
              status: true,
              msg: "Login successful",
              data: { phone: phone, token: token },
            });
        } else {
          res.status(200).json({ status: true, msg: "invalid password" });
        }
      }
    })
    .catch((error) =>
      res
        .status(400)
        .json({ status: false, msg: "Server Error !!", data: error })
    );
};

////////////////////////////////////////////////////////////POST login  with token
const tokenLogin = async (req, res) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decoded = jwt.verify(token, "SECRET_KEY");
      const id = decoded._id
     
      await User.findOne({_id:id})
        .then((data) => {
          if (!data) {
            res
              .status(200)
              .json({
                status: false,
                msg: "This user does not exists in Database "
              });
          } else {
            res
              .status(200)
              .json({
                status: true,
                msg: `Hi user,Welcome`,
              });
          }
        })
        .catch((error) => {
          res
            .status(400)
            .json({
              status: false,
              msg: `Server Error Trt Agian !!`,
              data: error,
            });
        });
    } catch {
      res
        .status(400)
        .json({
          status: false,
          msg: "invalid token , generate new token ",
        });
    }
  } else {
    res.status(200).json({ status: true, msg: "No Token sent"});
  }
};

///////////////////////////////////////////////////////////////////////////////////

module.exports = { postUser, loginUser, tokenLogin };
