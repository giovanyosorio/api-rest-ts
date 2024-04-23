import { Request, Response } from "express"
import { handlehttp } from "../utils/error.handler"
import { JwtPayload } from "jsonwebtoken";


interface RequExt extends Request{
    user?:string | JwtPayload;

}
export const getORders=async(req:RequExt,res:Response)=>{
    try {


        res.send({data:"esto es con sesion jwt",
            user:req.user
        })
    } catch (error) {
        handlehttp(res,"Error get Items"+error)
    }
}