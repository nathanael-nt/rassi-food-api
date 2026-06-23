import { Router } from "express";
import jwt from "./token.js";

import controllerCategoria from "./controllers/controlCategoria.js";
import controllerBanner from "./controllers/controlBanner.js";
import controllerEmpresa from "./controllers/controlEmpresa.js";
import controllerDestaque from "./controllers/controlDestaque.js";
import controllerPedido from "./controllers/controlPedido.js";
import controllerPedidoItem from "./controllers/controlPedidoItem.js";
import controllerProduto from "./controllers/controlProduto.js";
import controllerProdutoCategoria from "./controllers/controlProdutoCategoria.js";
import controllerUsuario from "./controllers/controlUsuario.js";
import controllerUsuarioFavorito from "./controllers/controlUsuarioFavorito.js";

const router = Router();

router.get("/teste", (req, res) => {
    res.status(200).json({ mensagem: "Senha ou e-mail inválidos." });
});

router.get("/categorias", controllerCategoria.Listar);
router.get("/banners", controllerBanner.Listar);
router.get("/empresas", controllerEmpresa.Listar);

router.get("/destaques", controllerDestaque.Listar);
router.get("/pedidos", controllerPedido.Listar);
router.get("/pedido-itens", controllerPedidoItem.Listar);
router.get("/produtos", controllerProduto.Listar);
router.get("/produto-categorias", controllerProdutoCategoria.Listar);
router.get("/usuarios", controllerUsuario.Listar);
router.get("/usuario-favoritos", controllerUsuarioFavorito.Listar);

router.post("/usuarios/login", controllerUsuario.Login)
router.post("/usuarios", controllerUsuario.Inserir)
router.get("/usuarios/perfil", jwt.ValidateJWT, controllerUsuario.Perfil)

export default router;