import { Request, Response } from "express"
import { handlehttp } from "../utils/error.handler"
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/items"



 const getItem=async(req:Request,res:Response)=>{

    try {
        const {id}=req.params
        const getCarByid=await getCar(id)
       console.log(getCarByid)
       res.send(getCarByid)
      
    } catch (error) {
        handlehttp(res,"Error get Item"+error)
    }

}


export const getItems=async(req:Request,res:Response)=>{
    try {
        const getCar=await getCars()
        console.log(getCar)
        res.send(getCar)
        
    } catch (error) {
        handlehttp(res,"Error get Items"+error)
    }
}

export const updateItem=async(req:Request,res:Response)=>{
 try {
    const {id}=req.params
    const body=req.body
    const updateItem=await updateCar(id,body)
    console.log(updateItem)
    res.send(updateItem)
 } catch (error) {
    handlehttp(res,"Error update Items")
 }   
}

 export const posItem=async (req:Request,res:Response)=>{
    try {
        const body=req.body
       const responseItem=await insertCar(body)
       res.send(responseItem)
       
    } catch (error) {
        handlehttp(res,"Error post Items    "+error)
    }
}

export const deleteItem=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params
        const deleteItem=await deleteCar(id)
        console.log(deleteItem)
        res.send(deleteItem)
    } catch (error) {
        handlehttp(res,"Error post Items" +error)
    }
}

export{ getItem}