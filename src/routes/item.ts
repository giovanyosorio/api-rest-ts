import { Router,Request,Response } from "express";
import { deleteItem, getItem, getItems, posItem, updateItem } from "../controllers/item";


const router=Router()
/**
 * Get
 */
router.get("/",getItems)
router.get("/:id",getItem)
router.put("/:id",updateItem)
router.post("/",posItem)
router.delete("/:id",deleteItem)


export {router}


