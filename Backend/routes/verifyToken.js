const Jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authH = req.headers.token;

  if (authH) {
      
    Jwt.verify(token, process.env.JWTKEY, (err, user) => {
      if (err) res.status(403).json("token not valid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("not login");
  }
};

const verifyandlogin=(req,res,next)=>{
    verifyToken(res,req,()=>{
        if(req.user.id=== req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json("failed to do")
        }
    })

}

module.exports = { verifyToken,verifyandlogin };
