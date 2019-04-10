import bcrypt from 'bcrypt';

const password = '';

const hashPassword = (pwd) => {
    const salt = bcrypt.genSaltSync(20);
    password = bcrypt.hashSync(pwd, salt);
    return password;
};

export  default hashPassword;