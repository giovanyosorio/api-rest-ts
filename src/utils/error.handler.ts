import { Response } from "express";

export const handlehttp=(res:Response  ,error:string)=>{
res.status(500)
res.send({error})
}

