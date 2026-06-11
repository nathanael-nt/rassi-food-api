import { Router } from "express";
import controllerCategoria from "./controllers/controlCategoria.js"
import controllerBanner from "./controllers/controlBanner.js"
import controllerEmpresa from "./controllers/controlEmpresa.js"
const router = Router();

router.get('/teste', (req, res) => {
    res.status(200).json({mensagem: 'Senha ou e-mail inválidos.'});
})

router.get("/categorias",controllerCategoria.Listar);

router.get("/banners",controllerBanner.Listar);

router.get("/empresas",controllerEmpresa.Listar);

export default router;