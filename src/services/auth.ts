
import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/users"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

const registerNewUser=async({email,password,name}:User)=>{

    const checkUser=await UserModel.findOne({email})
    if(checkUser){
        return "alredy user" 
    }
    const passwordEncrypt=await encrypt(password)
    const createUser=await UserModel.create({email,password:passwordEncrypt,name})
    return createUser
}

const loginUser=async({email,password}:Auth)=>{
   const checkUser=await UserModel.findOne({email})
    if(!checkUser){
        return "not found user" 
    }

    const passwordHash=checkUser.password//encriptado
    const isCorrect=await verified(password,passwordHash)
    if(!isCorrect){
        return "password incorrect";
    }
    else{
        const token=await generateToken(checkUser.email)
        const data={
            token,
            user:checkUser,
        }
        return data
    }
}

export {registerNewUser,loginUser}
