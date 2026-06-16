import serviceProduto from "../services/servProduto.js";

async function Listar(req, res) {
    try {
        const produtos = await serviceProduto.Listar();
        res.status(200).json(produtos);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}

export default { Listar };