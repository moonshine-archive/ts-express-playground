import { Router } from "express";
import authRoutes from "./auth";
import productsRouter from "./products";
import usersRouter from "./users";
import cartsRoutes from "./carts";
import ordersRoutes from "./orders";

const rootRouter: Router = Router();

rootRouter.use("/auth", authRoutes);
rootRouter.use("/products", productsRouter);
rootRouter.use("/users", usersRouter);
rootRouter.use("/carts", cartsRoutes);
rootRouter.use("/orders", ordersRoutes);

export default rootRouter;
