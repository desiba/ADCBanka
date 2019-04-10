import jwt from 'jsonwebtoken';

const CreateToken = {


    token(user, secretKey){
        const authToken = jwt.sign(
            user, secretKey, {expiresIn: '24h'},
        );

        return authToken;
    }


};

export default CreateToken;