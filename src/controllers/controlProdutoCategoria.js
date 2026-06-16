import serviceProdutoCategoria from "../services/servProdutoCategoria.js";

async function Listar(req, res) {
    try {
        const produtoCategorias = await serviceProdutoCategoria.Listar();
        res.status(200).json(produtoCategorias);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}

export default { Listar };