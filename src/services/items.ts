import { Car } from "../interfaces/car.interface";
import itemModel from "../models/item";

const insertCar=async(item:Car)=>{

    const newCar=await itemModel.create(item)
    return newCar
}

const getCars=async()=>{
    const getCars=await itemModel.find({})
    return getCars
}

const getCar=async(id:string)=>{
    const getCar =await itemModel.findOne({_id:id})
    return getCar
}

const updateCar=async(id:string,update:Car)=>{
    const updateCar =await itemModel.findOneAndUpdate({_id:id},update,{new:true})
    return updateCar
}

const deleteCar=async(id:string)=>{
    const deleteCar=await itemModel.findByIdAndDelete({_id:id})
    return deleteCar
}

export {insertCar,getCars,getCar,updateCar,deleteCar}