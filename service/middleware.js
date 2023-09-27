
const jwt_decode = require('jwt-decode');
const sign = require('jwt-encode');

/////////////////////////////////Token decode
const  decoder = (token) => {
  const decodedHeader = jwt_decode(token);
  console.log(decodedHeader);
  return decodedHeader;
}
/////////////////////////////////Token Generate
const  encoder = (data) => {
  const secret = 'secret'; 
  const jwt = sign(data, secret);
  console.log(jwt)
  return jwt
}
////////////////////////////////////

const user = {} ;

///////////////////////////////////////////////////
user.middleware = async (req, res, next) => {
  console.log("Hi this middleware")
}

module.exports = user