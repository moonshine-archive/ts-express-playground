import { Router } from "express";
import { errorHandler } from "../error-handler";
import authMiddleware from "../middlewares/auth";
import {
  addAddress,
  changeUserRole,
  deleteAddress,
  getUserById,
  listAddress,
  listUsers,
  updateUser,
} from "../controllers/users";
import adminMiddleware from "../middlewares/admin";

const usersRouter: Router = Router();

usersRouter.post("/address", [authMiddleware], errorHandler(addAddress));
usersRouter.delete(
  "/address/:id",
  [authMiddleware],
  errorHandler(deleteAddress)
);
usersRouter.get("/address", [authMiddleware], errorHandler(listAddress));
usersRouter.put("/", [authMiddleware], errorHandler(updateUser));
usersRouter.put(
  "/:id/role",
  [authMiddleware, adminMiddleware],
  errorHandler(changeUserRole)
);
usersRouter.get(
  "/",
  [authMiddleware, adminMiddleware],
  errorHandler(listUsers)
);
usersRouter.get(
  "/:id",
  [authMiddleware, adminMiddleware],
  errorHandler(getUserById)
);

export default usersRouter;
