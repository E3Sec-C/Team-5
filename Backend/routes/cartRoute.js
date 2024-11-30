import express from "express"
import { addToCart,removalFromCart,getCart } from "../controllers/cartController"
import authMiddleware from "../middleware/auth";

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removalFromCart)
cartRouter.post("/get",authMiddleware,getCart)

export default cartRouter;