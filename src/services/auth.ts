import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/users"

const registerNewUser=async({email,password,name}:User)=>{

    const checkUser=await UserModel.findOne({email})
    if(checkUser){
        return "alredy user" 
    }
    const createUser=await UserModel.create({email,password,name})
    return createUser
}

const loginUser=async()=>{

}

export {registerNewUser,loginUser}
