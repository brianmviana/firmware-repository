import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import Firmware from "./models/Firmware";
import FirmwareController from "./controllers/FirmwareController";
// import UserController from "./app/controllers/UserController";
// import authMiddleware from "./app/middlewares/auth";

const routes = Router();
const upload = multer(multerConfig);

/* Sessions routes */
// routes.post("/sessions", SessionController.store); // not implemented in frontend

/* User routes */
// routes.post("/users", UserController.store); // not implemented in frontend
// routes.put("/users", authMiddleware, UserController.update); /* auth */ // not implemented in frontend

/* Firmware routes */
routes.get("/firmwares", FirmwareController.index); /* use "authMiddleware" to lock this router */

routes.get("/firmwares/:id", FirmwareController.indexById); /* use "authMiddleware" to lock this router */

routes.get("/firmwares/:project", FirmwareController.indexByProject); /* use "authMiddleware" to lock this router */

routes.get("/firmwares/:board", FirmwareController.indexByBoard); /* use "authMiddleware" to lock this router */

routes.get("/firmwares/:version", FirmwareController.indexByVersion); /* use "authMiddleware" to lock this router */

routes.post("/firmwares", multer(multerConfig).single("file"), FirmwareController.store); /* use "authMiddleware" to lock this router */

routes.delete("/firmwares/:id", FirmwareController.delete); /* use "authMiddleware" to lock this router */

export default routes;