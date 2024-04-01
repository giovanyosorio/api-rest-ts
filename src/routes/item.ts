import { Router,Request,Response } from "express";

const router=Router()
/**
 * Get
 */

router.get("/",(req:Request,res:Response)=>{
    res.send({data:"modelos"})
})

export {router}
