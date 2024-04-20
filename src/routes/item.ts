import { Router } from "express";
import { deleteItem, getItem, getItems, posItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";


const router=Router()
/**
 * Get
 */
router.get("/",logMiddleware,getItems)
router.get("/:id",getItem)
router.put("/:id",updateItem)
router.post("/",posItem)
router.delete("/:id",deleteItem)


export {router}


