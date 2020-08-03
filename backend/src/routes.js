import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FirmwareController from "./app/controllers/FirmwareController";
import authMiddleware from "./app/middlewares/auth";

const routes = Router();
const upload = multer(multerConfig);

/* Sessions routes */
routes.post("/sessions", SessionController.store);

/* User routes */
routes.post("/users", UserController.store);
routes.put("/users", authMiddleware, UserController.update);

/* File routes */
routes.get("/firmwares", authMiddleware, FirmwareController.index);
routes.post("/firmwares", authMiddleware, upload.single("req.file"), FirmwareController.store);

export default routes;