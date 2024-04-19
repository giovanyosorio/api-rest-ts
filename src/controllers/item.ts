import { Request, Response } from "express"
import { handlehttp } from "../utils/error.handler"

 const getItem=(req:Request,res:Response)=>{

    try {
        console.log("get item")
    } catch (error) {
        handlehttp(res,"Error get Item")
    }

}


export const getItems=(req:Request,res:Response)=>{
    try {
        
        console.log("get items")
    } catch (error) {
        handlehttp(res,"Error get Items")
    }
}

export const updateItem=(req:Request,res:Response)=>{
 try {
    
    console.log("update")
 } catch (error) {
    handlehttp(res,"Error update Items")
 }   
}

 export const posItem=(req:Request,res:Response)=>{
    try {
        const body=req.body
        console.log(body)
    } catch (error) {
        handlehttp(res,"Error post Items    ")
    }
}

export const deleteItem=(req:Request,res:Response)=>{
    try {
        const {body}=req
        console.log(body)
    } catch (error) {
        handlehttp(res,"Error post Items    ")
    }
}

export{ getItem}