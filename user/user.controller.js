const UserModel = require('./user.model')
const bcrypt = require('bcrypt')
exports.register = async(body) =>{
    if(!body.email || !body.userName || !body.password){
        return [401,'Please provide all details',{}]
    }
    const user = await UserModel.getUserByEmail(body.email)
    if(user){
        return [401, 'User already exists!', {} ]
    }
    body.password = await bcrypt.hash(body.password,10);
    UserModel.create(body);
    return [200,'User created successfully please login',{}];
}

exports.login = async(body) => {
    if(!body.email || !body.password){
        return [401,'Please provide all details',{}]
    }
    const user = await UserModel.getUserByEmail(body.email)
    if(!user) {
        return [404,'User not Found',{}]
    }
    const isPasswordMatched =  await bcrypt.compare(
        body.password,
        user.password
    )
    if(!isPasswordMatched) {
        return [401, 'Incorrect password', {}]
    }
    delete user.password;
    return [200, "Login Success", user]

}