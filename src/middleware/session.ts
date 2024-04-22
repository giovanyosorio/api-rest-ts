import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle"
import { JwtPayload } from "jsonwebtoken";

interface RequExt extends Request{
    user?:string | JwtPayload;

}
const checkJWT=(req:RequExt,res:Response,next:NextFunction)=>{

    try {
        const jwtUser=req.headers.authorization || ""
        const jwt=jwtUser.split(" ").pop()
        const isUser=verifyToken(`${jwt}`)
        
        if(!isUser)
            {
                res.status(401).json("no tienes una sesion validad")
            }else{
                req.user=isUser
                console.log({jwt})
                next()
            }


    } catch (error) {
        res.status(400).json("session no valida")
    }
}

export {checkJWT}
