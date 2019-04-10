import jwt from 'jsonwebtoken';



const JWT = {};
JWT.verifyToken = (req, res, next) => {

    
    


    let token = req.body.token || req.query.token || req.headers.Authorization || req.headers.authorization;
     token = token ? req.headers.authorization.split(" ")[1] : token;



    if(!token){
        return res.status(403).json('Please log in');
    }

    
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      
        console.log(error);

        if(error){
            return res.status(401).json(error.message);
        }
        req.decodedToken = decoded;
        next();
    });
};

export default JWT;