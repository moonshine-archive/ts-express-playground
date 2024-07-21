import { Router } from "express";
import { errorHandler } from "../error-handler";
import authMiddleware from "../middlewares/auth";
import {
  addItemToCart,
  changeQuantity,
  deleteItemFromCart,
  getCart,
} from "../controllers/cart";

const cartsRoutes: Router = Router();

cartsRoutes.post("/", [authMiddleware], errorHandler(addItemToCart));
cartsRoutes.get("/", [authMiddleware], errorHandler(getCart));
cartsRoutes.delete("/:id", [authMiddleware], errorHandler(deleteItemFromCart));
cartsRoutes.put("/:id", [authMiddleware], errorHandler(changeQuantity));

export default cartsRoutes;
