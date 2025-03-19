const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
     
    const token = req.headers["authorization"];

    if(!token){
        return res.status(403).json({ message: "no token received"})
    }

    try{ 
        const decode = jwt.verify(token.split(" ")[1],process.env.secret_key)
        req.user = decode;
        next()
    }
    catch(err){
        return res.status(401).json({ message: "Invalid or expired token!" });
    }
}

module.exports = verifyToken;