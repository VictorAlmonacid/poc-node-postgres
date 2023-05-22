import { Router } from "express";
import { registerUser, obtenerUsuariosController } from "../controllers/user.js";

const router = Router();

router.post('/', registerUser);

router.get('/', obtenerUsuariosController)

export {router};