import {Router} from "express";
import {createUser, getUsers, login} from "../controllers/userController";

export const userRoutes = Router();
userRoutes.get("/users", getUsers);
userRoutes.post("/user", createUser);
userRoutes.get("/login", login);